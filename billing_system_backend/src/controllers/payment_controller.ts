import { Request, Response } from "express";
import { initiateMpesaPayment } from "../services/mpesa_service";
import { Purchase, Plan, User } from "../models/index";
import jwt from "jsonwebtoken";

export const initiatePayment = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "No token provided" });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "your_jwt_secret"
    ) as any;
    const user = await User.findByPk(decoded.id);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const { planId, phone } = req.body;
    if (!planId || !phone) {
      return res
        .status(400)
        .json({ success: false, message: "Plan ID and phone number required" });
    }

    const plan = await Plan.findByPk(planId);
    if (!plan) {
      return res
        .status(404)
        .json({ success: false, message: "Plan not found" });
    }

    const stkResponse = await initiateMpesaPayment(
      phone,
      plan.price,
      plan.name
    );

    const purchase = await Purchase.create({
      userId: user.id,
      planId: plan.id,
      amount: plan.price,
      transactionCode: stkResponse.CheckoutRequestID,
      status: "Pending",
      expiresAt: new Date(
        Date.now() + (parseInt(plan.duration) || 24) * 60 * 60 * 1000
      ),
    });

    res.status(200).json({
      success: true,
      data: {
        purchaseId: purchase.id,
        message: "Payment initiated. Check your phone for M-Pesa prompt.",
      },
    });
  } catch (error) {
    const errorMessage =
      error && typeof error === "object" && "message" in error
        ? (error as { message: string }).message
        : "Payment initiation failed";
    console.error("❌ Payment initiation failed:", errorMessage);
    res.status(500).json({ success: false, message: errorMessage });
  }
};

export const handleMpesaCallback = async (req: Request, res: Response) => {
  try {
    const {
      Body: { stkCallback },
    } = req.body;
    const { CheckoutRequestID, ResultCode, ResultDesc } = stkCallback;

    const purchase = await Purchase.findOne({
      where: { transactionCode: CheckoutRequestID },
    });
    if (!purchase) {
      console.error(
        "❌ Purchase not found for CheckoutRequestID:",
        CheckoutRequestID
      );
      return res
        .status(404)
        .json({ success: false, message: "Purchase not found" });
    }

    purchase.status = ResultCode === "0" ? "Active" : "Expired";
    await purchase.save();

    console.log(`✅ M-Pesa callback processed: ${ResultDesc}`);
    res.status(200).json({ success: true, message: "Callback processed" });
  } catch (error) {
    const errorMessage =
      error && typeof error === "object" && "message" in error
        ? (error as { message: string }).message
        : "Callback processing failed";
    console.error("❌ M-Pesa callback failed:", errorMessage);
    res.status(500).json({ success: false, message: errorMessage });
  }
};

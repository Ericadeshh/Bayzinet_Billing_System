import { Request, Response } from "express";

export const initiatePayment = async (req: Request, res: Response) => {
  res
    .status(501)
    .json({ success: false, message: "M-Pesa payment not implemented" });
};

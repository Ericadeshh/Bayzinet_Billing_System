import { Request, Response } from "express";
import { Plan } from "../models/index";

export const getAllPlans = async (req: Request, res: Response) => {
  try {
    const plans = await Plan.findAll();
    res.status(200).json({ success: true, data: plans });
  } catch (error) {
    console.error(
      "❌ Error fetching plans:",
      error instanceof Error ? error.message : String(error)
    );
    res.status(500).json({ success: false, message: "Failed to fetch plans" });
  }
};

export const createPlan = async (req: Request, res: Response) => {
  try {
    const newPlan = await Plan.create(req.body);
    res.status(201).json({ success: true, data: newPlan });
  } catch (error) {
    console.error(
      "❌ Error creating plan:",
      error instanceof Error ? error.message : String(error)
    );
    res.status(500).json({ success: false, message: "Failed to create plan" });
  }
};

export const updatePlan = async (req: Request, res: Response) => {
  try {
    const plan = await Plan.findByPk(req.params.id);
    if (!plan)
      return res
        .status(404)
        .json({ success: false, message: "Plan not found" });
    await plan.update(req.body);
    res.status(200).json({ success: true, data: plan });
  } catch (error) {
    console.error(
      "❌ Error updating plan:",
      error instanceof Error ? error.message : String(error)
    );
    res.status(500).json({ success: false, message: "Failed to update plan" });
  }
};

export const deletePlan = async (req: Request, res: Response) => {
  try {
    const plan = await Plan.findByPk(req.params.id);
    if (!plan)
      return res
        .status(404)
        .json({ success: false, message: "Plan not found" });
    await plan.destroy();
    res.status(200).json({ success: true, message: "Plan deleted" });
  } catch (error) {
    console.error(
      "❌ Error deleting plan:",
      error instanceof Error ? error.message : String(error)
    );
    res.status(500).json({ success: false, message: "Failed to delete plan" });
  }
};

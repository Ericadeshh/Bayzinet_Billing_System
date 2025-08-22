import { Router } from "express";
import {
  getAllPlans,
  createPlan,
  updatePlan,
  deletePlan,
} from "../controllers/plan_controller";
import { verifyAdmin } from "../middlewares/auth_middleware";

const router = Router();

router.get("/plans", getAllPlans);
router.post("/admin/plans", verifyAdmin, createPlan);
router.put("/admin/plans/:id", verifyAdmin, updatePlan);
router.delete("/admin/plans/:id", verifyAdmin, deletePlan);

export default router;

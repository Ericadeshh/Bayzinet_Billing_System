import { Router } from "express";
import { initiatePayment } from "../controllers/payment_controller";

const router = Router();

router.post("/purchase", initiatePayment);

export default router;

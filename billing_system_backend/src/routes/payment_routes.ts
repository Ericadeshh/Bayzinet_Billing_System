import { Router } from "express";
import {
  initiatePayment,
  handleMpesaCallback,
} from "../controllers/payment_controller";

const router = Router();

router.post("/purchase", initiatePayment);
router.post("/mpesa/callback", handleMpesaCallback);

export default router;

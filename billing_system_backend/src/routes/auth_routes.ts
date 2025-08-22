import { Router } from "express";
import { login, validateVoucher } from "../controllers/auth_controller";

const router = Router();

router.post("/login", login);
router.post("/voucher/validate", validateVoucher);

export default router;

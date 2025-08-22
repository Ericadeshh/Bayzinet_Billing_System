import { Router } from "express";
import { manageHotspot } from "../controllers/mikrotik_controller";

const router = Router();

router.post("/hotspot", manageHotspot);

export default router;

import { Router } from "express";
import { getSetting, updateSetting } from "../controllers/settings.controller";

const router = Router();

router.post("/", updateSetting);

router.get("/", getSetting);

export default router;

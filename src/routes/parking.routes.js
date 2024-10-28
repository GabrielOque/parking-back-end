import { Router } from "express";
import { verifyToken } from "../middlewares/auth.js";

import {
  newRegister,
  getParkings,
  closeRegister,
} from "../controllers/parking.controllers.js";

const router = Router();

router.post("/register", verifyToken, newRegister);
router.get("/all", verifyToken, getParkings);
router.put("/close/:id", verifyToken, closeRegister);

export default router;

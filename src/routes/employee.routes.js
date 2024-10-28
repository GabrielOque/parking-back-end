import { Router } from "express";
import { verifyToken } from "../middlewares/auth.js";
import {
  createEmployee,
  loginEmployee,
  getEmployees,
} from "../controllers/employee.controllers.js";

const router = Router();

router.post("/", createEmployee);
router.post("/login", loginEmployee);
router.get("/", verifyToken, getEmployees);

export default router;

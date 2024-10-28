import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import employeeRoutes from "./routes/employee.routes.js";
import parkingRoutes from "./routes/parking.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/employee", employeeRoutes);
app.use("/api/parking", parkingRoutes);

export default app;

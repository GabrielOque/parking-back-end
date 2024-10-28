import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { swaggerUi, swaggerDocs } from "./swagger.js";

import employeeRoutes from "./routes/employee.routes.js";
import parkingRoutes from "./routes/parking.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/employee", employeeRoutes);
app.use("/api/parking", parkingRoutes);
app.use("/api-docs-back", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

export default app;

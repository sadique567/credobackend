import express from "express";
import cors from "cors";
import helmet from "helmet";

import authRoutes from "./routes/auth.routes.js";

const app = express();


// Middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());


// Routes
app.use("/api/auth", authRoutes);


// Test Route
app.get("/", (req, res) => {
    res.json({
        status: true,
        message: "API Working 🚀"
    });
});


// 404 handler
app.use((req, res) => {
    res.status(404).json({
        status: false,
        message: "Route Not Found"
    });
});


export default app;
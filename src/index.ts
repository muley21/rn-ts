// import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import cors from "cors";
import express, { NextFunction, Request, Response } from 'express'
import mongoose from "mongoose";
// import todoRoutes from "./routes/todo.routes";
import todoRoutes from './routes/todo.routes'

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
const mongoUrl = process.env.MONGO_URL;
if (!mongoUrl) {
    throw new Error("MONGO_URL is not defined in environment variables.");
}

mongoose
    .connect(mongoUrl)
    .then(() => console.log("MONGO_CONNECTED"))
    .catch((err) => console.error("Failed to connect to MongoDB:", err.message));

// Routes
app.use("/api/todos", todoRoutes); // Correct usage of imported routes

// 404 Handler
app.use((req: Request, res: Response) => {
    res.status(404).json({ message: "Resource Not Found" });
});

// Error Handling Middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.message);
    res.status(500).json({ message: "Internal Server Error", error: err.message });
});

// Start Server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`SERVER RUNNING on port ${port}`);
});

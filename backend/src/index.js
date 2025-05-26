import express from "express";
import authRoutes from "./routes/auth.route.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import messageRoutes from "./routes/message.route.js";
import cors from "cors";
import path from "path";
import { connectDB } from "./lib/db.js";
import { app, server } from "./lib/socket.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(cookieParser());
app.use(cors({
    origin: [process.env.FRONTEND_URL || "http://localhost:5173"],
    credentials: true,
}));

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// Only serve static files in production and if the frontend build exists
if(process.env.NODE_ENV === "production"){
    try {
        const frontendPath = path.join(__dirname, "../frontend/dist");
        if (require('fs').existsSync(frontendPath)) {
            app.use(express.static(frontendPath));
            app.get("*", (req, res) => {
                res.sendFile(path.join(frontendPath, "index.html"));
            });
        }
    } catch (error) {
        console.log("Frontend build not found, running in API-only mode");
    }
}

//replaced app with a server. Lays on top of the app and waits for communication
server.listen(PORT, () => {
    console.log("Server is running on PORT " + PORT);
    connectDB();
});
import express from "express";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(express.json()); // Allows our server to read JSON from requests

app.use("/api/users", userRoutes); // Any requests that starts with /api/users goes to userRoutes

export default app;
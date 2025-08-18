import express from "express";
import dotenv from "dotenv";
import { initDatabase } from "./config/db_config";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bayzinet Backend is running!");
});

async function startServer() {
  try {
    await initDatabase();
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

startServer();

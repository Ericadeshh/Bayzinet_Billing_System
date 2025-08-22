import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { initDatabase } from "./config/db_config";
import { seedPlans } from "./seeders/plan_seeder";
import planRoutes from "./routes/plan_routes";
import authRoutes from "./routes/auth_routes";
import paymentRoutes from "./routes/payment_routes";
import mikrotikRoutes from "./routes/mikrotik_routes";
import { errorHandler } from "./middlewares/error_middleware";

dotenv.config({ quiet: true });

const app = express();
const port = process.env.PORT || 5000;

// Allow multiple origins
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  // Add production URL here, e.g., 'https://your-app.com'
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (e.g., Postman) or from allowed origins
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, // If you need cookies or auth headers
  })
);

app.use(express.json());
app.use("/api", planRoutes);
app.use("/api", authRoutes);
app.use("/api", paymentRoutes);
app.use("/api", mikrotikRoutes);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Bayzinet Backend is running!");
});

async function startServer() {
  try {
    await initDatabase();
    console.log("🔄 Starting plan seeding...");
    await seedPlans();
    console.log("🔄 Plan seeding completed.");
    app.listen(port, () => {
      console.log(`✅ Server running on port ${port}`);
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error("❌ Failed to start server:", error.message);
    } else {
      console.error("❌ Failed to start server:", error);
    }
    process.exit(1);
  }
}

startServer();

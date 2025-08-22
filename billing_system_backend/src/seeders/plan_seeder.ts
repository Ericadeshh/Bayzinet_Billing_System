import { Plan } from "../models/index";

export const seedPlans = async () => {
  try {
    const planCount = await Plan.count();
    if (planCount > 0) {
      console.log("✅ Plans table already has data, skipping seeding.");
      return;
    }

    console.log("⚠️ Plans table is empty, seeding initial data...");

    const samplePlans = [
      {
        name: "3 HOURS UNLIMITED",
        price: 10.0,
        duration: "3 Hours",
        devices: "1 Device",
        category: "Hourly",
      },
      {
        name: "6 HOURS UNLIMITED",
        price: 20.0,
        duration: "6 Hours",
        devices: "1 Device",
        category: "Hourly",
      },
      {
        name: "12 HOURS UNLIMITED",
        price: 30.0,
        duration: "12 Hours",
        devices: "1 Device",
        category: "Hourly",
      },
      {
        name: "Game Streaming 3 Hours",
        price: 30.0,
        duration: "3 Hours",
        devices: "1 Device",
        category: "Hourly",
      },
      {
        name: "6 HOURS VIP FAST SPEED",
        price: 40.0,
        duration: "6 Hours",
        devices: "1 Device",
        category: "Hourly",
      },
      {
        name: "12 HOURS VIP FAST SPEED",
        price: 60.0,
        duration: "12 Hours",
        devices: "1 Device",
        category: "Hourly",
      },
      {
        name: "DAILY UNLIMITED",
        price: 50.0,
        duration: "24 Hours",
        devices: "1 Device",
        category: "Daily",
      },
      {
        name: "WEEKLY UNLIMITED",
        price: 200.0,
        duration: "7 Days",
        devices: "1 Device",
        category: "Weekly",
      },
      {
        name: "MONTHLY UNLIMITED",
        price: 750.0,
        duration: "30 Days",
        devices: "1 Device",
        category: "Monthly",
      },
    ];

    await Plan.bulkCreate(samplePlans);
    console.log("✅ Seeded 9 sample plans successfully.");
  } catch (error) {
    if (error instanceof Error) {
      console.error("❌ Plan seeding failed:", error.message);
    } else {
      console.error("❌ Plan seeding failed:", error);
    }
    throw error;
  }
};

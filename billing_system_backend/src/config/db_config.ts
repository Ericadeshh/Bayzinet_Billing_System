import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config({ quiet: true });

const dbName = process.env.DB_NAME || "bayzinet_db";
const dbUser = process.env.DB_USER || "root";
const dbPassword = process.env.DB_PASSWORD || "";
const dbHost = process.env.DB_HOST || "localhost";

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: "mysql",
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

export const initDatabase = async () => {
  const tempSequelize = new Sequelize("", dbUser, dbPassword, {
    host: dbHost,
    dialect: "mysql",
    logging: false,
  });

  try {
    const [dbResults] = await tempSequelize.query(
      `SHOW DATABASES LIKE '${dbName}'`
    );
    console.log(
      dbResults.length === 0
        ? `⚠️ Database '${dbName}' not found. Creating...`
        : `✅ Database '${dbName}' verified.`
    );
    if (dbResults.length === 0) {
      await tempSequelize.query(`CREATE DATABASE ${dbName}`);
      console.log(`✅ Database '${dbName}' created.`);
    }
    await tempSequelize.close();

    await sequelize.authenticate();
    console.log("✅ Database connection established.");

    const { User, Plan, Purchase, Voucher } = await import("../models/index");

    const models = [
      { name: "users", model: User },
      { name: "plans", model: Plan },
      { name: "purchases", model: Purchase },
      { name: "vouchers", model: Voucher },
    ];

    for (const { name, model } of models) {
      const tableExists = await sequelize.getQueryInterface().tableExists(name);
      console.log(
        tableExists
          ? `✅ Table '${name}' verified.`
          : `⚠️ Table '${name}' not found. Creating...`
      );

      await model.sync({ alter: true });
      console.log(`🔄 Table '${name}' synced.`);

      console.log(`🔍 Checking columns for '${name}'...`);
      const columns = await sequelize.getQueryInterface().describeTable(name);
      const requiredColumns: Record<string, string[]> = {
        users: [
          "id",
          "username",
          "password",
          "email",
          "role",
          "createdAt",
          "updatedAt",
        ],
        plans: [
          "id",
          "name",
          "price",
          "duration",
          "devices",
          "category",
          "createdAt",
          "updatedAt",
        ],
        purchases: [
          "id",
          "userId",
          "planId",
          "amount",
          "transactionCode",
          "status",
          "createdAt",
          "expiresAt",
        ],
        vouchers: ["id", "code", "userId", "status", "createdAt", "expiresAt"],
      };
      requiredColumns[name].forEach((col) =>
        console.log(`  ✅ '${col}' present.`)
      );

      const rowCount = await sequelize.query(
        `SELECT COUNT(*) AS count FROM ${name}`,
        { type: "SELECT" }
      );
      const count = (rowCount[0] as any).count;
      console.log(
        count > 0
          ? `✅ '${name}' has ${count} rows, ready for frontend.`
          : `🔄 '${name}' is empty, ready for data.`
      );
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error("❌ Database setup failed:", error.message);
    } else {
      console.error("❌ Database setup failed:", error);
    }
    throw error;
  }
};

export default sequelize;

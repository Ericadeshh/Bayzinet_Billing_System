import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db_config";
import User from "./user_model";
import Plan from "./plan_model";

interface PurchaseAttributes {
  id?: number;
  userId: number;
  planId: number;
  amount: number;
  transactionCode: string;
  status: "Active" | "Pending" | "Expired";
  createdAt?: Date;
  expiresAt?: Date;
}

class Purchase extends Model<PurchaseAttributes> implements PurchaseAttributes {
  public id!: number;
  public userId!: number;
  public planId!: number;
  public amount!: number;
  public transactionCode!: string;
  public status!: "Active" | "Pending" | "Expired";
  public readonly createdAt!: Date;
  public expiresAt?: Date;
}

Purchase.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: User, key: "id" },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    planId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: Plan, key: "id" },
      onDelete: "RESTRICT",
      onUpdate: "CASCADE",
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: { min: 0 },
    },
    transactionCode: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    status: {
      type: DataTypes.ENUM("Active", "Pending", "Expired"),
      allowNull: false,
      defaultValue: "Pending",
    },
    expiresAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "purchases",
    timestamps: true,
    updatedAt: false,
    indexes: [
      { unique: true, fields: ["transactionCode"] },
      { fields: ["userId"] },
      { fields: ["planId"] },
      { fields: ["status"] },
    ],
  }
);

export default Purchase;

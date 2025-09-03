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
  status: "Pending" | "Active" | "Expired";
  expiresAt: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

class Purchase extends Model<PurchaseAttributes> implements PurchaseAttributes {
  public id!: number;
  public userId!: number;
  public planId!: number;
  public amount!: number;
  public transactionCode!: string;
  public status!: "Pending" | "Active" | "Expired";
  public expiresAt!: Date;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
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
    },
    planId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: Plan, key: "id" },
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    transactionCode: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("Pending", "Active", "Expired"),
      allowNull: false,
      defaultValue: "Pending",
    },
    expiresAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "purchases",
    timestamps: true,
  }
);

Purchase.belongsTo(User, { foreignKey: "userId" });
Purchase.belongsTo(Plan, { foreignKey: "planId" });

export default Purchase;

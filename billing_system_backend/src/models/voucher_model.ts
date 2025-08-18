import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db_config";
import User from "./user_model";

interface VoucherAttributes {
  id?: number;
  code: string;
  userId?: number;
  status: "Active" | "Used" | "Expired";
  createdAt?: Date;
  expiresAt?: Date;
}

class Voucher extends Model<VoucherAttributes> implements VoucherAttributes {
  public id!: number;
  public code!: string;
  public userId?: number;
  public status!: "Active" | "Used" | "Expired";
  public readonly createdAt!: Date;
  public expiresAt?: Date;
}

Voucher.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    code: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: User,
        key: "id",
      },
      onDelete: "SET NULL",
      onUpdate: "CASCADE",
    },
    status: {
      type: DataTypes.ENUM("Active", "Used", "Expired"),
      allowNull: false,
      defaultValue: "Active",
    },
    expiresAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "vouchers",
    timestamps: true,
    updatedAt: false,
    indexes: [
      {
        unique: true,
        fields: ["code"],
      },
      {
        fields: ["userId"],
      },
      {
        fields: ["status"],
      },
    ],
  }
);

export default Voucher;

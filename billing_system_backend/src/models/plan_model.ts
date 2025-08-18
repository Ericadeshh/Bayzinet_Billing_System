import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db_config";

interface PlanAttributes {
  id?: number;
  name: string;
  price: number;
  duration: string;
  devices: string;
  category: string;
  createdAt?: Date;
  updatedAt?: Date;
}

class Plan extends Model<PlanAttributes> implements PlanAttributes {
  public id!: number;
  public name!: string;
  public price!: number;
  public duration!: string;
  public devices!: string;
  public category!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Plan.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        min: 0,
      },
    },
    duration: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    devices: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    category: {
      type: DataTypes.ENUM("Hourly", "Daily", "Weekly", "Monthly"),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "plans",
    timestamps: true,
    indexes: [
      {
        unique: true,
        fields: ["name"],
      },
      {
        fields: ["category"],
      },
    ],
  }
);

export default Plan;

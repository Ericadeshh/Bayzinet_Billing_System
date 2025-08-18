import User from "./user_model";
import Plan from "./plan_model";
import Purchase from "./purchase_model";
import Voucher from "./voucher_model";

// Define associations
User.hasMany(Purchase, { foreignKey: "userId", onDelete: "CASCADE" });
Purchase.belongsTo(User, { foreignKey: "userId" });

Plan.hasMany(Purchase, { foreignKey: "planId", onDelete: "RESTRICT" });
Purchase.belongsTo(Plan, { foreignKey: "planId" });

User.hasMany(Voucher, { foreignKey: "userId", onDelete: "SET NULL" });
Voucher.belongsTo(User, { foreignKey: "userId" });

export { User, Plan, Purchase, Voucher };

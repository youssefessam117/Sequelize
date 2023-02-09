import { DataTypes } from "sequelize";
import connections from "../dbConections.js";
import userSchema from "./userTabls.model.js";

const productSchema = connections.define("product", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  productname: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  price: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
});
productSchema.sync();
userSchema.hasMany(productSchema, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
productSchema.belongsTo(userSchema);
connections.sync({ alter: true });

export default productSchema;

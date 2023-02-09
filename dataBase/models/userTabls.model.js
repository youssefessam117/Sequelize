import { DataTypes } from "sequelize";
import connections from "../dbConections.js";
import productSchema from "./productTable.modle.js";

const userSchema = connections.define("user", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  age: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
});
userSchema.sync();

export default userSchema;

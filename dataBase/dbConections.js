import {Sequelize} from "sequelize";

const connections = new Sequelize("assignments", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default connections;

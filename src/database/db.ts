import { Sequelize } from "sequelize";

export const db = new Sequelize("database", "root", "123456", {
  dialect: "mysql",
  host: "localhost",
  port: 3306,
});

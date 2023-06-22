import { Sequelize } from "sequelize";

const db = new Sequelize("landing_page_app", "root", "", {
  host: "localhost",
  dialect: "mysql",
  logging: false, //console loggin ดู sql
});

export default db;

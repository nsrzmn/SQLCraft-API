"use strict";

import * as dotenv from "dotenv";
import { Sequelize } from "sequelize-typescript";
import { models } from "../models";

dotenv.config({ path: ".env" });

// console.log("process.env", process.env.DATABASE_USERNAME);
// console.log("process.env", process.env.DATABASE_HOST);
// console.log("process.env", process.env.DATABASE_PORT);
// console.log("process.env", process.env.DATABASE_PASSWORD);
// console.log("process.env", process.env.DATABASE_NAME);

export const sequelize: Sequelize = new Sequelize(
  process.env.DATABASE_NAME || "",
  process.env.DATABASE_USERNAME || "",
  process.env.DATABASE_PASSWORD,
  {
    dialect: "mysql",
    timezone: "+05:00",
    host: process.env.DATABASE_HOST,
    logging: process.env.NODE_ENVR === "local" ? true : false,
    models: [...models],
    port: +(process.env.DATABASE_PORT || ""),
    replication: {
      read: [
        {
          database: process.env.DATABASE_NAME,
          host: process.env.DATABASE_HOST,
          password: process.env.DATABASE_PASSWORD,
          username: process.env.DATABASE_USERNAME,
        },
      ],
      write: {
        database: process.env.DATABASE_NAME,
        host: process.env.DATABASE_HOST,
        password: process.env.DATABASE_PASSWORD,
        username: process.env.DATABASE_USERNAME,
      },
    },
  }
);

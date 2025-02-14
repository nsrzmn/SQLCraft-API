import express from "express";
import cors from "cors";
import path from "path";
import * as dotenv from "dotenv";
import { sequelize } from "../src/config/database";
import { routes } from "./routes/routes";
import * as http from "http";

dotenv.config({ path: ".env" });

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.set("host", process.env.OPENSHIFT_NODEJS_IP || "0.0.0.0");
app.set("port", process.env.PORT || 8081);
app.set("env", process.env.NODE_ENVR || "development");
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  express.json({ limit: "10mb" })(req, res, next);
});

app.use("/api", routes);

export const server: http.Server = http.createServer(app);

(async () => {
  try {
    await sequelize.sync({ force: false });
    console.log("Database connection established and synchronized.");

    server.listen(app.get("port"), (): void => {
      console.log(
        " App is running at http://localhost:%d in %s mode",
        app.get("port"),
        app.get("env")
      );
      console.log(" Press CTRL-C to stop\n");
    });
  } catch (error) {
    console.error("Error synchronizing database or starting server:", error);
  }
})();

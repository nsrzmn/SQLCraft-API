import { Router } from "express";
import { dummyRouter } from "./dummy.routes";

export const routes: Router = Router();

routes.use("/", dummyRouter);

import { Router } from "express";
import { dummyRouter } from "./dummy.routes";
import { userRouter } from "./user.routes";

export const routes: Router = Router();

routes.use("/", dummyRouter, userRouter);

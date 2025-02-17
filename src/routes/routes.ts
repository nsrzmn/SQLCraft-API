import { Router } from "express";
import { dummyRouter } from "./dummy.routes";
import { userRouter } from "./user.routes";
import { authRouter } from "./auth.routes";
import { postsRouter } from "./posts.routes";

export const routes: Router = Router();

routes.use("/", dummyRouter, userRouter, authRouter, postsRouter);

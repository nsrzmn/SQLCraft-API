import { Router } from "express";
import { userRouter } from "./user.routes";
import { authRouter } from "./auth.routes";
import { postsRouter } from "./posts.routes";
import { commentsRouter } from "./comments.routes";

export const routes: Router = Router();

routes.use("/", userRouter, authRouter, postsRouter, commentsRouter);

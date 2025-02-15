import { Router, Request, Response } from "express";
import { authController, dummyController } from "../controllers";

export const authRouter: Router = Router();

authRouter.post("/auth/register", (...args: [Request, Response]) =>
  authController.register(...args)
);

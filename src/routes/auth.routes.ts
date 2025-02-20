import { Router, Request, Response } from "express";
import { authController } from "../controllers";

export const authRouter: Router = Router();

authRouter.post("/auth/register", (...args: [Request, Response]) =>
  authController.register(...args)
);

authRouter.post("/auth/login", (...args: [Request, Response]) =>
  authController.login(...args)
);

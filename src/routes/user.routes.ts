import { Router, Request, Response } from "express";
import { dummyController, userController } from "../controllers";

export const userRouter: Router = Router();

userRouter.get("/getAllUsers", (...args: [Request, Response]) =>
  userController.getAllUsers(...args)
);
  
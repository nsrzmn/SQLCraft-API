import { Router, Request, Response } from "express";
import { dummyController, userController } from "../controllers";

export const userRouter: Router = Router();

userRouter.get("/users", (...args: [Request, Response]) =>
  userController.getAllUsers(...args)
);
userRouter.get("/users/:id", (...args: [Request, Response]) =>
  userController.getUserById(...args)
);
userRouter.patch("/users/:id", (...args: [Request, Response]) =>
  userController.updateUserById(...args)
);
userRouter.delete("/users/:id", (...args: [Request, Response]) =>
  userController.deleteUserById(...args)
);
  
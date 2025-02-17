import { Router, Request, Response } from "express";
import { dummyController, userController } from "../controllers";

export const userRouter: Router = Router();

userRouter.get("/getAllUsers", (...args: [Request, Response]) =>
  userController.getAllUsers(...args)
);
userRouter.get("/getUserById", (...args: [Request, Response]) =>
  userController.getUserById(...args)
);
userRouter.post("/updateUserById", (...args: [Request, Response]) =>
  userController.updateUserById(...args)
);
userRouter.delete("/deleteUserById", (...args: [Request, Response]) =>
  userController.deleteUserById(...args)
);
  
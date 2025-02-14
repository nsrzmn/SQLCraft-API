import { Router, Request, Response } from "express";
import { dummyController } from "../controllers";

export const dummyRouter: Router = Router();

dummyRouter.post("/dummyFunction", (...args: [Request, Response]) =>
  dummyController.dummyFunction(...args)
);

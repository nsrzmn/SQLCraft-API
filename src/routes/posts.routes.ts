import { Router, Request, Response } from "express";
import { postsController } from "../controllers";
import { AuthenticatedRequest } from "@src/utils/auth.middleware";

export const postsRouter: Router = Router();

postsRouter.post("/posts", (...args: [Request, Response]) =>
  postsController.createPost(...args)
);

postsRouter.get("/posts", (...args: [Request, Response]) =>
  postsController.getAllPosts(...args)
);

postsRouter.get("/posts/:id", (...args: [Request, Response]) =>
  postsController.getPostsById(...args)
);

postsRouter.patch("/posts/:id", (...args: [Request, Response]) =>
  postsController.updatePost(...args)
);

postsRouter.delete("/posts/:id", (...args: [Request, Response]) =>
  postsController.delPost(...args)
);

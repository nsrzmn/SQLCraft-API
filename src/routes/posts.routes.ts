import { Router, Request, Response } from "express";
import { postsController } from "../controllers";

export const postsRouter: Router = Router();

postsRouter.post("/createPost", (...args: [Request, Response]) =>
  postsController.createPost(...args)
);

postsRouter.get("/getAllPosts", (...args: [Request, Response]) =>
  postsController.getAllPosts(...args)
);

postsRouter.get("/getPostsById", (...args: [Request, Response]) =>
  postsController.getPostsById(...args)
);

postsRouter.post("/updatePost", (...args: [Request, Response]) =>
  postsController.updatePost(...args)
);

postsRouter.delete("/delPost", (...args: [Request, Response]) =>
  postsController.delPost(...args)
);

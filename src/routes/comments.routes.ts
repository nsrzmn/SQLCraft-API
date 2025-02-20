import { Router, Request, Response } from "express";
import { commentsController } from "../controllers";

export const commentsRouter: Router = Router();

commentsRouter.post("/comments", (...args: [Request, Response]) =>
  commentsController.createComment(...args)
);

commentsRouter.get("/comments/:postId", (...args: [Request, Response]) =>
  commentsController.getAllCommentsForPost(...args)
);

commentsRouter.patch("/comments/:postId", (...args: [Request, Response]) =>
  commentsController.updateComment(...args)
);

commentsRouter.delete("/comments/:id", (...args: [Request, Response]) =>
  commentsController.delComment(...args)
);

// postsRouter.get("/getPostsById", (...args: [Request, Response]) =>
//   postsController.getPostsById(...args)
// );

// postsRouter.post("/updatePost", (...args: [Request, Response]) =>
//   postsController.updatePost(...args)
// );

// postsRouter.delete("/delPost", (...args: [Request, Response]) =>
//   postsController.delPost(...args)
// );

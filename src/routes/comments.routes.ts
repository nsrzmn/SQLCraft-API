import { Router, Request, Response } from "express";
import { commentsController } from "../controllers";

export const commentsRouter: Router = Router();

commentsRouter.post("/createComment", (...args: [Request, Response]) =>
  commentsController.createComment(...args)
);

commentsRouter.get("/getAllCommentsForPost", (...args: [Request, Response]) =>
  commentsController.getAllCommentsForPost(...args)
);

commentsRouter.post("/updateComment", (...args: [Request, Response]) =>
  commentsController.updateComment(...args)
);

commentsRouter.delete("/delComment", (...args: [Request, Response]) =>
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

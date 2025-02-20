import { authService, commentsService, postsService, userService } from "@src/services";
import { UserController } from "./user.controller";
import { AuthController } from "./auth.controller";
import { PostsController } from "./posts.controller";
import { CommentsController } from "./comments.controller";

export const userController: UserController = new UserController(userService);
export const authController: AuthController = new AuthController(authService);
export const postsController: PostsController = new PostsController(postsService);
export const commentsController: CommentsController = new CommentsController(commentsService);

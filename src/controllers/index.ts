import { authService, dummyService, postsService, userService } from "@src/services";
import { DummyController } from "./dummy.controller";
import { UserController } from "./user.controller";
import { AuthController } from "./auth.controller";
import { PostsController } from "./posts.controller";

export const dummyController: DummyController = new DummyController(dummyService);
export const userController: UserController = new UserController(userService);
export const authController: AuthController = new AuthController(authService);
export const postsController: PostsController = new PostsController(postsService);

import { authService, dummyService, userService } from "@src/services";
import { DummyController } from "./dummy.controller";
import { UserController } from "./user.controller";
import { AuthController } from "./auth.controller";

export const dummyController: DummyController = new DummyController(dummyService);
export const userController: UserController = new UserController(userService);
export const authController: AuthController = new AuthController(authService);

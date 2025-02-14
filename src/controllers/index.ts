import { dummyService, userService } from "@src/services";
import { DummyController } from "./dummy.controller";
import { UserController } from "./user.controller";

export const dummyController: DummyController = new DummyController(dummyService);
export const userController: UserController = new UserController(userService);

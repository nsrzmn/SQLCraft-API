import { AuthService } from "./auth.service";
import { DummyService } from "./dummy.service";
import { UserService } from "./user.service";

const dummyService: DummyService = new DummyService()
const userService: UserService = new UserService()
const authService: AuthService = new AuthService()

export {
    dummyService, userService, authService
}
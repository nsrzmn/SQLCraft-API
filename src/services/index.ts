import { AuthService } from "./auth.service";
import { DummyService } from "./dummy.service";
import { PostsService } from "./posts.service";
import { UserService } from "./user.service";

const dummyService: DummyService = new DummyService()
const userService: UserService = new UserService()
const authService: AuthService = new AuthService()
const postsService: PostsService = new PostsService()

export {
    dummyService, userService, authService, postsService
}
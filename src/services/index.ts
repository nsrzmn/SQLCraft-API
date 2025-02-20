import { AuthService } from "./auth.service";
import { CommentsService } from "./comments.service";
import { PostsService } from "./posts.service";
import { UserService } from "./user.service";

const userService: UserService = new UserService()
const authService: AuthService = new AuthService()
const postsService: PostsService = new PostsService()
const commentsService: CommentsService = new CommentsService()

export { 
    userService, authService, postsService, commentsService
}
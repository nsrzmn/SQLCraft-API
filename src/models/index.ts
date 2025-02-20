import { Comments } from "./comments.model";
import { Posts } from "./posts.model";
import { User } from "./user.model";

type ModelType = any;


export const models: ModelType = [ User, Posts, Comments];

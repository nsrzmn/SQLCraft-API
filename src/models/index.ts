import { dummy } from ".";
import { Comments } from "./comments.model";
import { Posts } from "./posts.model";
import { User } from "./user.model";

type ModelType = any;

export * from "./dummy";

export const models: ModelType = [dummy, User, Posts, Comments];

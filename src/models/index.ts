import { dummy } from ".";
import { Posts } from "./posts.model";
import { User } from "./user.model";

type ModelType = any;

export * from "./dummy";

export const models: ModelType = [dummy, User, Posts];

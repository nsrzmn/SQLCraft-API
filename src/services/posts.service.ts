import { Posts } from "@src/models/posts.model";
import { User } from "@src/models/user.model";

export class PostsService {
    public createPost = async (data: any): Promise<any> => {
        const { title, content, userId } = data;
        const post = await Posts.create({
            title,
            content,
            userId,
        });
        return post;
    };

    public getAllPosts = async (): Promise<any> => {
        const post = await Posts.findAll();
        if (post.length === 0) {
            throw new Error("No posts found");
        }
        return post;
    };

    public getPostsById = async (data:any): Promise<any> => {
        const { id } = data;
        const post = await Posts.findAll({
            where: {
                id,
            },
            include: [
                {
                    model: User,
                    attributes: ["id", "username", "email"],
                },
            ], 
        });
        if (!post || post.length === 0) {
            throw new Error("No posts found for this user");
        }
        return post;
    };

    public updatePost = async (data: any): Promise<any> => {
        const { title, content, userId, id } = data;
        const post = await Posts.findOne ({
            where: {
                id,
                userId,
            },
            attributes: ["id", "title", "content"],
        });
        if (!post) {
            throw new Error("Error");
        }

        // createing an object to update the post
        const updateData: Partial<{title:string, content: string}> = {};
        if (title !== undefined || title !== null) {
            updateData["title"] = title;
        };
        if (content !== undefined || content !== null) {
            updateData["content"] = content;
        };

        // updating the post
        const updatedPost = await post.update(updateData);

        return updatedPost;
    };

    public delPost  = async (data: any): Promise<any> => {
        const { userId, id } = data;
        const post = await Posts.findOne ({
            where: {
                id,
                userId,
            },
            attributes: ["id", "title", "content"],
        });
        if (!post) {
            throw new Error("Error");
        }

        // deleting the post
        const updatedPost = await post.destroy();

        return updatedPost;
    };
};
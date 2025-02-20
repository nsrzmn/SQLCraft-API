import { Comments } from "@src/models/comments.model";
import { Posts } from "@src/models/posts.model";

export class CommentsService {
    public createComment = async (data: any, user:any): Promise<any> => {
        const { postId, content } = data;
        const userId = user.id;

        const post = await Posts.findByPk(postId);
        if (!post ) {
            throw new Error("Post not found ");
        }
        
        const comment = await Comments.create({
            userId,
            postId,
            content,
        });
        return comment;
    };

    public getAllCommentsForPost = async (data:any): Promise<any> => {
        const { postId } = data;
        const post = await Posts.findAll({
            where: {
                id: postId,
            }, attributes: ["id", "title", "content"],
            include: [
                {
                    model: Comments,
                    attributes: ["id", "userId", "content"],
                    as: "comments",
                },
            ],
        })
        if (!post || post.length === 0) {
            throw new Error("No post found for this id");
        }
        return post;
    };

    public updateComment = async (data: any, user:any, postId:number): Promise<any> => {
        const { id, content } = data;
        const userId = user.id;
        const comment = await Comments.findByPk(id);
        if (!comment || (comment.userId !== userId) || (comment.postId !== postId)) {
            throw new Error("Comment not found or user not authorized");
        }

        comment.content = content;
        await comment.save();

        return comment;
    };

    public delComment = async (data: any, user:any): Promise<any> => {
        const id = data.id;
        const userId = user.id;
        const comment = await Comments.findByPk(id);
        if (!comment || (comment.userId !== userId )) {
            throw new Error("Comment not found or user not authorized");
        }

        await comment.destroy();

        return comment;
    };
};
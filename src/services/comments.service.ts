import { Comments } from "@src/models/comments.model";
import { Posts } from "@src/models/posts.model";

export class CommentsService {
    public createComment = async (data: any): Promise<any> => {
        const { userId, postId, content } = data;

        const post = await Posts.findByPk(postId);
        if (!post || post.userId !== userId) {
            throw new Error("Post not found or user not authorized");
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
        const comments = await Comments.findAll({
            where: {
                postId,
            },
            attributes: ["id", "userId", "content"],
            include: [
                {
                    model: Posts,
                    attributes: ["id", "title", "content"],
                },
            ],
        });
        if (!comments || comments.length === 0) {
            throw new Error("No comments found for this post");
        }
        return comments;
    };

    public updateComment = async (data: any): Promise<any> => {
        const { id, userId, postId, content } = data;
        const comment = await Comments.findByPk(id);
        if (!comment || (comment.userId !== userId || comment.postId !== postId)) {
            throw new Error("Comment not found or user not authorized");
        }

        comment.content = content;
        await comment.save();

        return comment;
    };

    public delComment = async (data: any): Promise<any> => {
        const { id, userId, postId } = data;
        const comment = await Comments.findByPk(id);
        if (!comment || (comment.userId !== userId || comment.postId !== postId)) {
            throw new Error("Comment not found or user not authorized");
        }

        await comment.destroy();

        return comment;
    };
};
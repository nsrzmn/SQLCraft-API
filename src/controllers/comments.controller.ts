import { CommentsService } from "@src/services/comments.service";
import { createCommentFunctionSchema, delCommentFunctionSchema, getAllCommentsForPostFunctionSchema, updateCommentFunctionSchema } from "@src/shared/common/validators/comments.validatior";
import { createPostFunctionSchema, delPostFunctionSchema, getPostsByIdFunctionSchema, updatePostFunctionSchema } from "@src/shared/common/validators/posts.validators";
import { AuthenticatedRequest } from "@src/utils/auth.middleware";
import { Request, Response } from "express";

export class CommentsController {
  /**
   * @param __service
   */

  public constructor(public __service: CommentsService) {}
  /**
   *
   * @param req
   * @param res
   * @param next
   */

  public createComment = async (req: AuthenticatedRequest, res: Response) => {
    try {
      const { body, user} = req;
      let message = "createComment function executed.";
      const data = await createCommentFunctionSchema.validateAsync(body);
      const response: any = await this.__service.createComment(data, user);

      res.status(200).json({
        statusCode: 200,
        message,
        response,
      });
    } catch (error: any) {
      res.status(403).send({
        statusCode: 403,
        message: error.message,
      });
    }
  };

  public getAllCommentsForPost = async (req: Request, res: Response) => {
    try {
      const { params } = req;
      let message = "getAllCommentsForPost function executed.";
      const data = await getAllCommentsForPostFunctionSchema.validateAsync(params);
      const response: any = await this.__service.getAllCommentsForPost(data);

      res.status(200).json({
        statusCode: 200,
        message,
        response,
      });
    } catch (error: any) {
      res.status(403).send({
        statusCode: 403,
        message: error.message,
      });
    }
  };

  public updateComment = async (req: AuthenticatedRequest, res: Response) => {
    try {
      const { body, user, params } = req;
      let message = "updateComment function executed.";
      const data = await updateCommentFunctionSchema.validateAsync(body);
      const response: any = await this.__service.updateComment(data, user, Number(params.postId));

      res.status(200).json({
        statusCode: 200,
        message,
        response,
      });
    } catch (error: any) {
      res.status(403).send({
        statusCode: 403,
        message: error.message,
      });
    }
  };

  public delComment = async (req: AuthenticatedRequest, res: Response) => {
    try {
      const { params, user } = req;
      let message = "delComment function executed.";
      // const data = await delCommentFunctionSchema.validateAsync(body);
      const response: any = await this.__service.delComment(params, user);

      res.status(200).json({
        statusCode: 200,
        message,
        response,
      });
    } catch (error: any) {
      res.status(403).send({
        statusCode: 403,
        message: error.message,
      });
    }
  };
  };

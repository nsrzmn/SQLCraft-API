import { CommentsService } from "@src/services/comments.service";
import { createCommentFunctionSchema, delCommentFunctionSchema, getAllCommentsForPostFunctionSchema, updateCommentFunctionSchema } from "@src/shared/common/validators/comments.validatior";
import { createPostFunctionSchema, delPostFunctionSchema, getPostsByIdFunctionSchema, updatePostFunctionSchema } from "@src/shared/common/validators/posts.validators";
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

  public createComment = async (req: Request, res: Response) => {
    try {
      const { body } = req;
      let message = "createComment function executed.";
      const data = await createCommentFunctionSchema.validateAsync(body);
      const response: any = await this.__service.createComment(data);

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
      const { query } = req;
      let message = "getAllCommentsForPost function executed.";
      const data = await getAllCommentsForPostFunctionSchema.validateAsync(query);
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

  public updateComment = async (req: Request, res: Response) => {
    try {
      const { body } = req;
      let message = "updateComment function executed.";
      const data = await updateCommentFunctionSchema.validateAsync(body);
      const response: any = await this.__service.updateComment(data);

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

  public delComment = async (req: Request, res: Response) => {
    try {
      const { body } = req;
      let message = "delComment function executed.";
      const data = await delCommentFunctionSchema.validateAsync(body);
      const response: any = await this.__service.delComment(data);

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

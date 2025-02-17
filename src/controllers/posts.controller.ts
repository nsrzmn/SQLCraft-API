import { PostsService } from "@src/services/posts.service";
import { createPostFunctionSchema, delPostFunctionSchema, getPostsByIdFunctionSchema, updatePostFunctionSchema } from "@src/shared/common/validators/posts.validators";
import { Request, Response } from "express";

export class PostsController {
  /**
   * @param __service
   */

  public constructor(public __service: PostsService) {}
  /**
   *
   * @param req
   * @param res
   * @param next
   */

  public createPost = async (req: Request, res: Response) => {
    try {
      const { body } = req;
      let message = "createPost function executed.";
      const data = await createPostFunctionSchema.validateAsync(body);
      const response: any = await this.__service.createPost(data);

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

  public getAllPosts = async (req: Request, res: Response) => {
    try {
      let message = "getAllPosts function executed.";
      const response: any = await this.__service.getAllPosts();

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

  public getPostsById = async (req: Request, res: Response) => {
    try {
      const { query } = req;
      const data = await getPostsByIdFunctionSchema.validateAsync(query);
      let message = "getPostsById function executed.";
      const response: any = await this.__service.getPostsById(data);

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

  public updatePost = async (req: Request, res: Response) => {
    try {
      const { body } = req;
      const data = await updatePostFunctionSchema.validateAsync(body);
      let message = "updatePost function executed.";
      const response: any = await this.__service.updatePost(data);

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

  public delPost = async (req: Request, res: Response) => {
    try {
      const { body } = req;
      const data = await delPostFunctionSchema.validateAsync(body);
      let message = "delPost function executed.";
      const response: any = await this.__service.delPost(data);

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
}

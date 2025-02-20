import { PostsService } from "@src/services/posts.service";
import { createPostFunctionSchema, delPostFunctionSchema, getPostsByIdFunctionSchema, updatePostFunctionSchema } from "@src/shared/common/validators/posts.validators";
import { AuthenticatedRequest } from "@src/utils/auth.middleware";
import { log } from "console";
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

  public createPost = async (req: AuthenticatedRequest, res: Response) => {
    try {
      const { body, user } = req;
      let message = "createPost function executed.";
      const validatedData = await createPostFunctionSchema.validateAsync(body);
      const response: any = await this.__service.createPost(validatedData, user);

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

  public getPostsById = async (req: AuthenticatedRequest, res: Response) => {
    try {
      const { params, user } = req;
      log("user", user);
      const validatedData = await getPostsByIdFunctionSchema.validateAsync(params);
      let message = "getPostsById function executed.";
      const response: any = await this.__service.getPostsById(validatedData, user);

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

  public updatePost = async (req: AuthenticatedRequest, res: Response) => {
    try {
      const { body, user } = req;
      const data = await updatePostFunctionSchema.validateAsync(body);
      let message = "updatePost function executed.";
      const response: any = await this.__service.updatePost(data, user);

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

  public delPost = async (req: AuthenticatedRequest, res: Response) => {
    try {
      const { body, user } = req;
      const data = await delPostFunctionSchema.validateAsync(body);
      let message = "delPost function executed.";
      const response: any = await this.__service.delPost(data, user);

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

import { UserService } from "@src/services/user.service";
import { deleteUserByIdFunctionSchema, getUserByIdFunctionSchema, updateUserByIdFunctionSchema } from "@src/shared/common/validators/user.validator";
import { Request, Response } from "express";
import { AuthenticatedRequest } from "@src/utils/auth.middleware";


export class UserController {
  /**
   * @param __service
   */

  public constructor(public __service: UserService) {}
  /**
   *
   * @param req
   * @param res
   * @param next
   */

  public getAllUsers = async (req: Request, res: Response) => {
    try {
      let message = "getAllUsers function executed.";
      // const data = await getAllUsersFunctionSchema.validateAsync(query);
      
      const response: any = await this.__service.getAllUsers();
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

  public getUserById = async (req: AuthenticatedRequest, res: Response) => {
    try {
      const { params, user } = req;
      console.log("user", user);
      

      let message = "getUserById function executed.";
      const data = await getUserByIdFunctionSchema.validateAsync(params);
      
      const response: any = await this.__service.getUserById(data, user);
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

  public updateUserById = async (req: AuthenticatedRequest, res: Response) => {
    try {
      const { params, body, user } = req;
      let message = "updateUserById function executed.";
      const validatedData  = await updateUserByIdFunctionSchema.validateAsync(body);
      
      
      const response: any = await this.__service.updateUserById(Number(params.id), validatedData, user);
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

  public deleteUserById = async (req: AuthenticatedRequest, res: Response) => {
    try {
      const { params, user } = req;
      let message = "deleteUserById function executed.";
      const data = await deleteUserByIdFunctionSchema.validateAsync(params);
      
      const response: any = await this.__service.deleteUserById(data, user);
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

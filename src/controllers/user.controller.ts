import { UserService } from "@src/services/user.service";
import { deleteUserByIdFunctionSchema, getUserByIdFunctionSchema, updateUserByIdFunctionSchema } from "@src/shared/common/validators/user.validator";
import { Request, Response } from "express";

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

  public getUserById = async (req: Request, res: Response) => {
    try {
      const { params } = req;

      let message = "getUserById function executed.";
      const data = await getUserByIdFunctionSchema.validateAsync(params);
      
      const response: any = await this.__service.getUserById(data);
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

  public updateUserById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { body } = req;
      let message = "updateUserById function executed.";
      const data = await updateUserByIdFunctionSchema.validateAsync(body);
      
      
      const response: any = await this.__service.updateUserById(Number(id), data);
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

  public deleteUserById = async (req: Request, res: Response) => {
    try {
      const { params } = req;
      let message = "deleteUserById function executed.";
      const data = await deleteUserByIdFunctionSchema.validateAsync(params);
      
      const response: any = await this.__service.deleteUserById(data);
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

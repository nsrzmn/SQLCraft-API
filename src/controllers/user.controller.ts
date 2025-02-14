import { UserService } from "@src/services/user.service";
import { getAllUsersFunctionSchema } from "@src/shared/common/validators/user.validator";
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
      const { query } = req;
      let message = "getAllUsers function executed.";
      const data = await getAllUsersFunctionSchema.validateAsync(query);
      
      const response: any = await this.__service.getAllUsers(data);
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

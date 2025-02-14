import { authService } from "@src/services";
import { Request, Response } from "express";

export class AuthController {
  /**
   * @param __service
   */

  public constructor(public __service: AuthController) {}
  /**
   *
   * @param req
   * @param res
   * @param next
   */

  public register = async (req: Request, res: Response) => {
    try {
      const { body } = req;
      let message = "User registered.";
      const response = await authService.register(body);
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

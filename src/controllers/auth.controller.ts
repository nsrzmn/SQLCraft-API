import { AuthService } from "@src/services/auth.service";
import { loginFunctionSchema, registerFunctionSchema } from "@src/shared/common/validators/auth.validator";
import { Request, Response } from "express";

export class AuthController {
  /**
   * @param __service
   */

  public constructor(public __service: AuthService) {}
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
      const data = await registerFunctionSchema.validateAsync(body);
      const response: any = await this.__service.register(data);

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

  public login = async (req: Request, res: Response) => {
    try {
      const { body } = req;
      let message = "User logged in.";
      const data = await loginFunctionSchema.validateAsync(body);
      const response: any = await this.__service.login(data);

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

import { AuthService } from "@src/services/auth.service";
import { DummyService } from "@src/services/dummy.service";
import { dummyFunctionSchema } from "@src/shared/common/validators/dummy.validators";
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
      // const data = await dummyFunctionSchema.validateAsync(body);
      const response: any = await this.__service.register(body);

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

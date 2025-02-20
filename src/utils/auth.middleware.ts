import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
// import { admin, employee, users } from "@src/models";
export interface AuthenticatedRequest extends Request {
  user?: {id: number, email: string};
}
const excludedUrls = ["/api/v2/auth/login", "/api/v2/auth/register", "/api/v2/users", "/api/v2/posts"
];
export const authenticateUser = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    
    console.log("originalUrl", req.originalUrl);
    if (
      excludedUrls.includes(req.originalUrl)) {
      next();
      return;
    }

    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token || token.length == 0) {
      return res
        .status(401)
        .json({ message: "Authorization token not provided" });
    }

    if (!process.env.JWT_SECRET) {
      return res.status(401).json({ message: "Secret key not provided" });
    }

    const decoded: any  = jwt.verify(token, process.env.JWT_SECRET) as {id: number, email: string};

    req.user = {
      id: decoded.id,
      email: decoded.email
    };

    next();
    // if (!token || token.length == 0) {
    //   return res
    //     .status(401)
    //     .json({ message: "Authorization token not provided" });
    // }
    // const decoded: any = jwt.verify(
    //   token,
    //   process.env.SECRET_KEY as string
    // ) as DecodedToken;
    // if (decoded?.isAdmin) {
    //   userData = await admin.findOne({ where: { id: decoded.id } })
    // } else {
    //   if (decoded?.roleId == 3) {
    //     userData = await employee.findOne({ where: { id: decoded.id } });
    //   } else {
    //     userData = await users.findOne({ where: { id: decoded.id } });
    //   }
    // }
    // if (!userData) {
    //   return res.status(401).json({ message: "User not found" });
    // }
    // req.user = userData;
  } catch (error: any) {
    return res.status(401).json({ message: "Token is invalid or expired." });
  }
};
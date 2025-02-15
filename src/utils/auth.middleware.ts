import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
// import { admin, employee, users } from "@src/models";
interface AuthenticatedRequest extends Request {
//   user?: users;
}
interface DecodedToken {
  id: number;
  role: any;
}
const excludedUrls = ["/api/auth/login", "/api/auth/register"
];
export const authenticateUser = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    var userData: any;
    console.log("originalUrl", req.originalUrl);
    if (
      excludedUrls.includes(req.originalUrl) ||
      req.originalUrl.startsWith("/api/getAppInfo")
    ) {
      next();
      return;
    }
    // const token = req.header("Authorization")?.replace("Bearer ", "");
    // console.log("Token:", token);
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
    next();
  } catch (error: any) {
    return res.status(401).json({ message: "Token is invalid or expired." });
  }
};
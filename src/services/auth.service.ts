import { User } from "@src/models/user.model";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export class AuthService {
    public register = async (data: any): Promise<any> => {
        const exsitingUser = await User.findOne({
            where: {
                email: data.email
            }});

        if (exsitingUser) {
            throw new Error("User already exists.");
        }

        const hashedPassword = await bcrypt.hash(data.password, 10);

        const newUser = await User.create({
            username: data.username,
            email: data.email,
            password: hashedPassword
        });

        if (!process.env.JWT_SECRET) {
            throw new Error("JWT_SECRET is not defined.");
        }

        const token = jwt.sign({ id: newUser.id, email: newUser.email }, process.env.JWT_SECRET, {
            expiresIn: "1d"
        });

        return { token };
    }
}
  
  
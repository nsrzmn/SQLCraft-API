import { User } from "@src/models/user.model";

export class UserService {
    public getAllUsers = async (data: { id: number }): Promise<User[]> => {
        const users = await User.findAll({  
            where: {
                id: data.id,
            },
            attributes: ["id", "username", "email"],
        });

        if (!users.length) {
            throw new Error("No users found.");
        }   
        return users;
    };
}
  
  
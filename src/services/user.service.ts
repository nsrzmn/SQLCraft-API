import { User } from "@src/models/user.model";

export class UserService {
    public getAllUsers = async (): Promise<User[]> => {
        const users = await User.findAll({  
            attributes: ["id", "username", "email"],
        });

        if (!users.length) {
            throw new Error("No users found.");
        }   
        return users;
    };

    public getUserById = async (data:any): Promise<User> => {
        const user = await User.findOne({ where: { id: data.id }, 
            attributes: ["id", "username", "email"],
        });

        if (!user) {
            throw new Error("No users found.");
        }
        
        return user;
    };

    public updateUserById = async (id:number, data:any): Promise<User> => {
        const user = await User.findOne({ where: { id }, attributes: ["id", "username", "email"] });

        if (!user) {
            throw new Error("No users found.");
        }

        // Update fields
        if (data.username) {
            user.username = data.username;
        }
        if (data.email) {
            user.email = data.email;
        }
        await user.save();
        return user;
    };

    public deleteUserById = async (data:any): Promise<User> => {
        const user = await User.findOne({ where: { id: data.id }, attributes: ["id", "username", "email"] });

        if (!user) {
            throw new Error("No users found.");
        }

        // delete user
        await user.destroy();
        return user;
    };
}
  
  
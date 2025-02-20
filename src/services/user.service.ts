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

    public getUserById = async (data:any, user:any): Promise<User> => {

        if (user.id !== data.id && user.email !== data.email) {
            throw new Error("You are not authorized to view this user.");
        }
        const searchUser = await User.findOne({ where: { id: data.id  }, 
            attributes: ["id", "username", "email"],
        });

        if (!searchUser) {
            throw new Error("No users found.");
        }
        
        return searchUser;
    };

    public updateUserById = async (id:number, validatedData:any, user:any): Promise<User> => {
        if( user.id !== id) { 
            throw new Error("You are not authorized to update this user.");
        }
        
        const userToUpdate = await User.findOne({ where: { id }, attributes: ["id", "username", "email"] });

        if (!userToUpdate) {
            throw new Error("No users found.");
        }

        // Update fields
        if (validatedData.username) {
            user.username = validatedData.username;
        }
        if (validatedData.email) {
            user.email = validatedData.email;
        }
        await userToUpdate.save();
        return userToUpdate;
    };

    public deleteUserById = async (data:any, user:any): Promise<User> => {
        if (user.id !== data.id) {
            throw new Error("You are not authorized to delete this user.");
        }
        const userToDelete = await User.findOne({ where: { id: data.id }, attributes: ["id", "username", "email"] });

        if (!userToDelete) {
            throw new Error("No users found.");
        }

        // delete user
        await userToDelete.destroy();
        return userToDelete;
    };
}
  
  
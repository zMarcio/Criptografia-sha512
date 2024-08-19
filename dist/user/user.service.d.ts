import { userInterfaceCreate } from "src/Interface/user-interface";
import { User } from "src/model/user.model";
export declare class UserService {
    private userModel;
    constructor(userModel: typeof User);
    getAllData(): Promise<User[]>;
    createUser(userData: Partial<userInterfaceCreate>): Promise<User>;
    comparateUser(document: any, cardToken: any): Promise<boolean>;
}

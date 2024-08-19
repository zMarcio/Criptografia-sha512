import { AppService } from "./app.service";
import { userInterfaceLogin, userInterfaceCreate, userInterfacePatch, userInterfaceDelete } from "./Interface/user-interface";
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getById(id: string): Promise<userInterfaceCreate>;
    getAllData(): Promise<userInterfaceCreate[]>;
    postUser(user: userInterfaceCreate, response: any): Promise<Object>;
    CompareUser(User: userInterfaceLogin, response: any): Promise<Object>;
    patchUser(id: string, User: userInterfacePatch, response: any): Promise<any>;
    deleteUser(id: string, User: userInterfaceDelete, response: any): Promise<string>;
}

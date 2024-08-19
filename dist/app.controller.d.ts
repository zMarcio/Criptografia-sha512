import { AppService } from "./app.service";
import { userInterfaceLogin, userInterfaceCreate, userInterfacePatch } from "./Interface/user-interface";
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getAllData(): Promise<userInterfaceCreate[]>;
    postUser(user: userInterfaceCreate, response: any): Object;
    CompareUser(User: userInterfaceLogin, response: any): Object;
    patchUser(id: string, User: userInterfacePatch): Object;
}

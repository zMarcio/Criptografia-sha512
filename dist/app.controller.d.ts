import { AppService } from "./app.service";
import { userInterfaceLogin, userInterfaceCreate } from "./Interface/user-interface";
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    postUser(User: userInterfaceCreate): string;
    CompareUser(User: userInterfaceLogin): string;
    patchUser(: any): any;
}

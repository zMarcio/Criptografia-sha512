import { AppService } from "./app.service";
import { userInterfaceCreate } from "./Interface/user-interface";
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getAllData(): Promise<userInterfaceCreate[]>;
    postUser(User: userInterfaceCreate): string;
}

import { userInterfaceLogin, userInterfaceCreate } from "./Interface/user-interface";
export declare class AppService {
    getHello(): string;
    encryptUser(User: userInterfaceCreate): string;
    compareUser(User: userInterfaceLogin): string;
}

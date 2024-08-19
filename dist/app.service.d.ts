import { UserService } from "./user/user.service";
import { userInterfaceLogin, userInterfaceCreate } from "./Interface/user-interface";
import { data_document_and_token } from "./Interface/data";
export declare class AppService {
    private readonly UserService;
    constructor(UserService: UserService);
    getHello(): string;
    getAllData(): Promise<userInterfaceCreate[]>;
    postEncryptUser(User: userInterfaceCreate): data_document_and_token;
    postLoginEncryptUser(User: userInterfaceLogin): Boolean;
    encryptVariable(document: string, cardToken: string): data_document_and_token;
}

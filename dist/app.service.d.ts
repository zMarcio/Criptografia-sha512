import { UserService } from "./user/user.service";
import { userInterfaceCreate } from "./Interface/user-interface";
import { data_document_and_token } from "./Interface/data";
export declare class AppService {
    private readonly UserService;
    constructor(UserService: UserService);
    getHello(): string;
    getAllData(): Promise<userInterfaceCreate[]>;
    postEncryptUser(User: userInterfaceCreate): string;
    encryptVariable(document: any, cardToken: any): data_document_and_token;
}

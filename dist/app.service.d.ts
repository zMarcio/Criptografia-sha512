import { UserService } from "./user/user.service";
import { userInterfaceLogin, userInterfaceCreate, userInterfacePatch } from "./Interface/user-interface";
import { data_document_and_token } from "./Interface/data";
export declare class AppService {
    private readonly UserService;
    constructor(UserService: UserService);
    getHello(): string;
    getById(id: number): Promise<userInterfaceCreate>;
    getAllData(): Promise<userInterfaceCreate[]>;
    postCreateUser(User: userInterfaceCreate): Promise<data_document_and_token>;
    postLoginUser(User: userInterfaceLogin): Promise<Boolean>;
    patchUser(id: number, User: userInterfacePatch): Promise<userInterfacePatch>;
    deleteUser(id: number): Promise<Boolean>;
    encryptVariable(document: string, cardToken: string): data_document_and_token;
}

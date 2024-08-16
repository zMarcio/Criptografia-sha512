import { data_document_and_token } from "src/Interface/data";
export declare class UserDTO {
    id?: Number;
    userDocument: String;
    creditCardToken: String;
    value?: Number;
    constructor(userDocument: String, creditCardToken: String, id?: Number, value?: Number);
    encrypt(): data_document_and_token;
}

import { data_document_and_token } from 'src/Interface/data';
export declare class User {
    id: Number;
    userDocument: String;
    creditCardToken: String;
    value: Number;
    constructor(id: Number, userDocument: String, creditCardToken: String, value: Number);
    encrypt(): data_document_and_token;
}

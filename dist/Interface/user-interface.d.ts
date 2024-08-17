export interface userInterfaceCreate {
    document: string;
    cardToken: string;
    value: number;
}
export interface userInterfaceLogin {
    document: string;
    cardToken: string;
}
export interface userInterfacePatch {
    document: string;
    cardToken: string;
    value: number;
}
export interface userInterfaceDelete {
    cardToken: string;
}

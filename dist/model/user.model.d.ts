import { Model } from "sequelize-typescript";
export declare class User extends Model {
    id: number;
    document: string;
    cardToken: string;
    value: number;
}

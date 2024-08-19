import { Injectable } from "@nestjs/common";
import { UserDTO } from "./DTO/userDto";
import { UserService } from "./user/user.service";
import { AppController } from "./app.controller";
import {
  userInterfaceLogin,
  userInterfaceCreate,
  userInterfacePatch,
} from "./Interface/user-interface";
import { data_document_and_token } from "./Interface/data";
import { json } from "sequelize";
import { userInfo } from "os";

@Injectable()
export class AppService {
  constructor(private readonly UserService: UserService) {}

  // Hello world
  getHello(): string {
    return "Hello World!";
  }

  // All data
  getAllData(): Promise<userInterfaceCreate[]> {
    return this.UserService.getAllData();
  }

  // Create user
  async postCreateUser(
    User: userInterfaceCreate
  ): Promise<data_document_and_token> {
    const { document, cardToken } = this.encryptVariable(
      User.document,
      User.cardToken
    );

    const UserCreate = new UserDTO(document, cardToken, User.value);

    const dataDB = await this.UserService.createUser(UserCreate);

    if (dataDB) {
      console.log(dataDB);
      return { document, cardToken };
    }

    return null;
  }

  // Login user
  async postLoginUser(User: userInterfaceLogin): Promise<Boolean> {
    const { document, cardToken } = this.encryptVariable(
      User.document,
      User.cardToken
    );

    const dataDB = await this.UserService.comparateUser(document, cardToken);

    if (dataDB) return true;
    return false;
  }
  // Patch user
  async patchUser(
    id: number,
    User: userInterfacePatch
  ): Promise<userInterfacePatch> {
    if (id === null) return null;

    if (User === null) return null;

    if (id === null && User === null) return null;

    const document = User.document;
    const cardToken = User.cardToken;

    const data = this.encryptVariable(document, cardToken);

    const UserPatch = new UserDTO(data.document, data.cardToken, User.value);

    const dataDB = await this.UserService.patchUser(id, UserPatch);

    if (dataDB)
      return {
        document: data.document,
        cardToken: data.cardToken,
        value: User.value,
      };

    return null;
  }

  async deleteUser(id: number): Promise<Boolean> {
    if (id === null) return false;

    const dataDB = await this.UserService.deleteUser(id);

    if (dataDB) return true;

    return false;
  }

  encryptVariable(
    document: string,
    cardToken: string
  ): data_document_and_token {
    const crypt = require("crypto");
    const data_document = crypt
      .createHash("sha512")
      .update(document)
      .digest("hex");

    const data_cardToken = crypt
      .createHash("sha512")
      .update(cardToken)
      .digest("hex");

    const data: data_document_and_token = {
      document: data_document,
      cardToken: data_cardToken,
    };

    return {
      document: data.document,
      cardToken: data.cardToken,
    };
  }
}

import { Injectable } from "@nestjs/common";
import { UserDTO } from "./DTO/userDto";
import { UserService } from "./user/user.service";
import { AppController } from "./app.controller";
import {
  userInterfaceLogin,
  userInterfaceCreate,
} from "./Interface/user-interface";
import { data_document_and_token } from "./Interface/data";
import { json } from "sequelize";

@Injectable()
export class AppService {
  constructor(private readonly UserService: UserService) {}
  getHello(): string {
    return "Hello World!";
  }

  getAllData(): Promise<userInterfaceCreate[]> {
    return this.UserService.getAllData();
  }

  postEncryptUser(User: userInterfaceCreate): data_document_and_token {
    const { document, cardToken } = this.encryptVariable(
      User.document,
      User.cardToken
    );

    const UserCreate = new UserDTO(document, cardToken, User.value);

    this.UserService.createUser(UserCreate);

    return { document, cardToken };
  }

  postLoginEncryptUser(User: userInterfaceLogin): Boolean {
    const { document, cardToken } = this.encryptVariable(
      User.document,
      User.cardToken
    );

    const dataDB = this.UserService.comparateUser(document, cardToken);

    if (dataDB) return true;
    return false;
  }

  // postUser(User: userInterfaceLogin): string {}

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

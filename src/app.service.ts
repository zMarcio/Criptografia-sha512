import { Injectable } from "@nestjs/common";
import { UserDTO } from "./DTO/userDto";
import { UserService } from "./user/user.service";
import { AppController } from "./app.controller";
import {
  userInterfaceLogin,
  userInterfaceCreate,
} from "./Interface/user-interface";
import { data_document_and_token } from "./Interface/data";

@Injectable()
export class AppService {
  constructor(private readonly UserService: UserService) {}
  getHello(): string {
    return "Hello World!";
  }

  getAllData(): Promise<userInterfaceCreate[]> {
    return this.UserService.getAllData();
  }

  postEncryptUser(User: userInterfaceCreate): string {
    const { document, cardToken } = this.encryptVariable(
      User.document,
      User.cardToken
    );

    const UserCreate = new UserDTO(document, cardToken, User.value);

    this.UserService.createUser(UserCreate);

    return `document: ${document}, cardToken: ${cardToken}`;
  }

  // compareUser(User: userInterfaceLogin): string {
  // const mockUser = new UserDTO("testing", "5567", 1, 4500);
  // const { document, cardToken } = mockUser.encrypt();
  // const realUser = new UserDTO(User.document, User.cardToken);
  // const info_1 = realUser.encrypt().document;
  // const info_2 = realUser.encrypt().cardToken;
  // if (document == info_1 && cardToken == info_2) {
  //   return "User is the same";
  // }
  // return "User is not the same";
  // }

  encryptVariable(document, cardToken): data_document_and_token {
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

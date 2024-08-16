import { Injectable } from "@nestjs/common";
import { UserDTO } from "./DTO-User/userDto";
import {
  userInterfaceLogin,
  userInterfaceCreate,
} from "./Interface/user-interface";

@Injectable()
export class AppService {
  getHello(): string {
    return "Hello World!";
  }

  encryptUser(User: userInterfaceCreate): string {
    const UserCreate = new UserDTO(
      User.document,
      User.cardToken,
      User.id,
      User.value
    );

    const { userDocument, creditCardToken } = UserCreate.encrypt();

    return `userDocument: ${userDocument}, creditCardToken: ${creditCardToken}`;
  }

  compareUser(User: userInterfaceLogin): string {
    const mockUser = new UserDTO("testing", "5567", 1, 4500);

    const { userDocument, creditCardToken } = mockUser.encrypt();

    const realUser = new UserDTO(User.document, User.cardToken);

    const info_1 = realUser.encrypt().userDocument;
    const info_2 = realUser.encrypt().creditCardToken;

    if (userDocument == info_1 && creditCardToken == info_2) {
      return "User is the same";
    }

    return "User is not the same";
  }
}

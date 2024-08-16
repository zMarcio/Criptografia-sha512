import { Injectable } from '@nestjs/common';
import { User } from './DTO-User/userDto';
import { data_document_and_token } from './Interface/data';

@Injectable()
export class AppService {
  getHello(): data_document_and_token {
    const user = new User(1, 'userDocument', 'creditCardToken', 100);
    const data = user.encrypt();
    return {
      userDocument: data.userDocument,
      creditCardToken: data.creditCardToken,
    };
  }
}

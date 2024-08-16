import { data_document_and_token } from 'src/Interface/data';

export class User {
  id: Number;
  userDocument: String;
  creditCardToken: String;
  value: Number;
  constructor(
    id: Number,
    userDocument: String,
    creditCardToken: String,
    value: Number,
  ) {
    this.id = id;
    this.userDocument = userDocument;
    this.creditCardToken = creditCardToken;
    this.value = value;
  }

  encrypt(): data_document_and_token {
    const crypt = require('crypto');
    const data_userDocument = crypt
      .createHash('sha512')
      .update(this.userDocument)
      .digest('hex');

    const data_creditCardToken = crypt
      .createHash('sha512')
      .update(this.creditCardToken) // Corrected line: update creditCardToken
      .digest('hex');

    const data = {
      userDocument: data_userDocument,
      creditCardToken: data_creditCardToken,
    };

    return {
      userDocument: data.userDocument,
      creditCardToken: data.creditCardToken,
    };
  }
}

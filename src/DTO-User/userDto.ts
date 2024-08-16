import { data_document_and_token } from "src/Interface/data";

export class UserDTO {
  id?: Number;
  userDocument: String;
  creditCardToken: String;
  value?: Number;
  constructor(
    userDocument: String,
    creditCardToken: String,
    id?: Number,
    value?: Number
  ) {
    if (id) this.id = id;
    this.userDocument = userDocument;
    this.creditCardToken = creditCardToken;
    if (value) this.value = value;
  }

  encrypt(): data_document_and_token {
    const crypt = require("crypto");
    const data_userDocument = crypt
      .createHash("sha512")
      .update(this.userDocument)
      .digest("hex");

    const data_creditCardToken = crypt
      .createHash("sha512")
      .update(this.creditCardToken)
      .digest("hex");

    const data: data_document_and_token = {
      userDocument: data_userDocument,
      creditCardToken: data_creditCardToken,
    };

    return {
      userDocument: data.userDocument,
      creditCardToken: data.creditCardToken,
    };
  }
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDTO = void 0;
class UserDTO {
    constructor(userDocument, creditCardToken, id, value) {
        if (id)
            this.id = id;
        this.userDocument = userDocument;
        this.creditCardToken = creditCardToken;
        if (value)
            this.value = value;
    }
    encrypt() {
        const crypt = require("crypto");
        const data_userDocument = crypt
            .createHash("sha512")
            .update(this.userDocument)
            .digest("hex");
        const data_creditCardToken = crypt
            .createHash("sha512")
            .update(this.creditCardToken)
            .digest("hex");
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
exports.UserDTO = UserDTO;
//# sourceMappingURL=userDto.js.map
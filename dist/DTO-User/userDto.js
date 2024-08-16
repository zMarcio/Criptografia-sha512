"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, userDocument, creditCardToken, value) {
        this.id = id;
        this.userDocument = userDocument;
        this.creditCardToken = creditCardToken;
        this.value = value;
    }
    encrypt() {
        const crypt = require('crypto');
        const data_userDocument = crypt
            .createHash('sha512')
            .update(this.userDocument)
            .digest('hex');
        const data_creditCardToken = crypt
            .createHash('sha512')
            .update(this.creditCardToken)
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
exports.User = User;
//# sourceMappingURL=userDto.js.map
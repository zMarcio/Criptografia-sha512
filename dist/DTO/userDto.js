"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDTO = void 0;
class UserDTO {
    constructor(document, cardToken, value) {
        this.document = document;
        this.cardToken = cardToken;
        if (value)
            this.value = value;
    }
}
exports.UserDTO = UserDTO;
//# sourceMappingURL=userDto.js.map
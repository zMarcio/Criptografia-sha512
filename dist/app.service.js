"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const userDto_1 = require("./DTO-User/userDto");
let AppService = class AppService {
    getHello() {
        return "Hello World!";
    }
    encryptUser(User) {
        const UserCreate = new userDto_1.UserDTO(User.document, User.cardToken, User.id, User.value);
        const { userDocument, creditCardToken } = UserCreate.encrypt();
        return `userDocument: ${userDocument}, creditCardToken: ${creditCardToken}`;
    }
    compareUser(User) {
        const mockUser = new userDto_1.UserDTO("testing", "5567", 1, 4500);
        const { userDocument, creditCardToken } = mockUser.encrypt();
        const realUser = new userDto_1.UserDTO(User.document, User.cardToken);
        const info_1 = realUser.encrypt().userDocument;
        const info_2 = realUser.encrypt().creditCardToken;
        if (userDocument == info_1 && creditCardToken == info_2) {
            return "User is the same";
        }
        return "User is not the same";
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map
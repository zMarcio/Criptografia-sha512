"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const userDto_1 = require("./DTO/userDto");
const user_service_1 = require("./user/user.service");
let AppService = class AppService {
    constructor(UserService) {
        this.UserService = UserService;
    }
    getHello() {
        return "Hello World!";
    }
    async getById(id) {
        return await this.UserService.getById(id);
    }
    async getAllData() {
        return await this.UserService.getAllData();
    }
    async postCreateUser(User) {
        const { document, cardToken } = this.encryptVariable(User.document, User.cardToken);
        const UserCreate = new userDto_1.UserDTO(document, cardToken, User.value);
        const dataDB = await this.UserService.createUser(UserCreate);
        if (dataDB) {
            console.log(dataDB);
            return { document, cardToken };
        }
        return null;
    }
    async postLoginUser(User) {
        const { document, cardToken } = this.encryptVariable(User.document, User.cardToken);
        const dataDB = await this.UserService.comparateUser(document, cardToken);
        if (dataDB)
            return true;
        return false;
    }
    async patchUser(id, User) {
        if (id === null)
            return null;
        if (User === null)
            return null;
        if (id === null && User === null)
            return null;
        const document = User.document;
        const cardToken = User.cardToken;
        const data = this.encryptVariable(document, cardToken);
        const UserPatch = new userDto_1.UserDTO(data.document, data.cardToken, User.value);
        const dataDB = await this.UserService.patchUser(id, UserPatch);
        if (dataDB)
            return {
                document: data.document,
                cardToken: data.cardToken,
                value: User.value,
            };
        return null;
    }
    async deleteUser(id) {
        if (id === null)
            return false;
        const dataDB = await this.UserService.deleteUser(id);
        if (dataDB)
            return true;
        return false;
    }
    encryptVariable(document, cardToken) {
        const crypt = require("crypto");
        const data_document = crypt
            .createHash("sha512")
            .update(document)
            .digest("hex");
        const data_cardToken = crypt
            .createHash("sha512")
            .update(cardToken)
            .digest("hex");
        const data = {
            document: data_document,
            cardToken: data_cardToken,
        };
        return {
            document: data.document,
            cardToken: data.cardToken,
        };
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService])
], AppService);
//# sourceMappingURL=app.service.js.map
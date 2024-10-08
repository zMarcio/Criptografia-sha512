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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const user_model_1 = require("../model/user.model");
let UserService = class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async getAllData() {
        const data = await this.userModel.findAll();
        return data;
    }
    async createUser(userData) {
        const userVerify = await this.userModel.findOne({
            where: {
                document: userData.document,
                cardToken: userData.cardToken,
            },
        });
        if (userVerify) {
            return false;
        }
        await this.userModel.create(userData);
        return true;
    }
    async comparateUser(document, cardToken) {
        const user = await this.userModel.findOne({
            where: {
                document: document,
                cardToken: cardToken,
            },
        });
        if (user) {
            return true;
        }
        return false;
    }
    async patchUser(id, userData) {
        const user = await this.userModel.findByPk(id);
        if (user) {
            await user.update(userData);
            return true;
        }
        return false;
    }
    async deleteUser(id) {
        const user = await this.userModel.findByPk(id);
        if (user) {
            await user.destroy();
            return true;
        }
        return false;
    }
    async getById(id) {
        const user = await this.userModel.findByPk(id);
        if (user) {
            return user;
        }
        return null;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(user_model_1.User)),
    __metadata("design:paramtypes", [Object])
], UserService);
//# sourceMappingURL=user.service.js.map
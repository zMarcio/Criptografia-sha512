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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
    async getById(id) {
        const idNumber = parseInt(id);
        return await this.appService.getById(idNumber);
    }
    async getAllData() {
        return await this.appService.getAllData();
    }
    async postUser(user, response) {
        try {
            const data = await this.appService.postCreateUser(user);
            if (data === null)
                return response.json({
                    message: "User already exists",
                    status: 400,
                });
            return response.json({
                message: "User created successfully",
                status: 201,
                Document: data.document,
                CardToken: data.cardToken,
            });
        }
        catch (error) {
            return response.json({
                message: error.message,
                status: 400,
            });
        }
    }
    async CompareUser(User, response) {
        try {
            const data = await this.appService.postLoginUser(User);
            if (data) {
                return response.json({
                    message: "Login sucessfull",
                    status: 200,
                });
            }
            return response.json({
                message: "Login failed",
                status: 400,
            });
        }
        catch (error) {
            return response.json({
                message: error.message,
                status: 400,
            });
        }
    }
    async patchUser(id, User, response) {
        try {
            const idNumber = parseInt(id);
            const data = await this.appService.patchUser(idNumber, User);
            if (data) {
                return response.json({
                    message: "User updated successfully",
                    status: 200,
                    document: data.document,
                    cardToken: data.cardToken,
                    value: data.value,
                });
            }
            else if (data === null) {
                return response.json({
                    message: "User not found",
                    status: 400,
                });
            }
            return response.json({
                message: "User not found",
                status: 400,
            });
        }
        catch (error) {
            return response.json({
                message: error.message,
                status: 400,
            });
        }
    }
    async deleteUser(id, User, response) {
        try {
            const idNumber = parseInt(id);
            const data = await this.appService.deleteUser(idNumber);
            if (data) {
                return response.json({
                    message: "User deleted successfully",
                    status: 200,
                });
            }
            return response.json({
                message: "User not found",
                status: 400,
            });
        }
        catch (error) {
            return response.json({
                message: error.message,
                status: 400,
            });
        }
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)("/api/hello"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)("/api/getById/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getById", null);
__decorate([
    (0, common_1.Get)("/api/allData"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getAllData", null);
__decorate([
    (0, common_1.Post)("/api/createUser"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "postUser", null);
__decorate([
    (0, common_1.Post)("/api/loginUser"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "CompareUser", null);
__decorate([
    (0, common_1.Patch)("api/modifiedUser/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "patchUser", null);
__decorate([
    (0, common_1.Delete)("/api/deleteUser/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "deleteUser", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map
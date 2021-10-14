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
exports.BalanceController = void 0;
const createQueryDto_1 = require("../dto/createQueryDto");
const balans_entity_1 = require("./entity/balans.entity");
const common_1 = require("@nestjs/common");
const balance_service_1 = require("./balance.service");
const nestjs_http_promise_1 = require("nestjs-http-promise");
const swagger_1 = require("@nestjs/swagger");
let BalanceController = class BalanceController {
    constructor(httpService, balanceService) {
        this.httpService = httpService;
        this.balanceService = balanceService;
    }
    async createQuery(createQueryDto) {
        return this.balanceService.createQuery(createQueryDto);
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200 }),
    (0, common_1.Post)('new'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createQueryDto_1.createQueryDto]),
    __metadata("design:returntype", Promise)
], BalanceController.prototype, "createQuery", null);
BalanceController = __decorate([
    (0, common_1.Controller)('balance'),
    __metadata("design:paramtypes", [nestjs_http_promise_1.HttpService, balance_service_1.BalanceService])
], BalanceController);
exports.BalanceController = BalanceController;
//# sourceMappingURL=balance.controller.js.map
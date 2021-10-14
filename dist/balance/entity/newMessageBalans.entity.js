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
exports.NewMassegeBalance = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let NewMassegeBalance = class NewMassegeBalance {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'Unique Id' }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], NewMassegeBalance.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'Id user provaider ' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], NewMassegeBalance.prototype, "id_provaider", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'wallet', description: 'Client Wallet' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], NewMassegeBalance.prototype, "wallet", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'balance', description: 'Client balance' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], NewMassegeBalance.prototype, "balance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'false', description: 'Request was delivered to the provider' }),
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], NewMassegeBalance.prototype, "valid", void 0);
NewMassegeBalance = __decorate([
    (0, typeorm_1.Entity)()
], NewMassegeBalance);
exports.NewMassegeBalance = NewMassegeBalance;
//# sourceMappingURL=newMessageBalans.entity.js.map
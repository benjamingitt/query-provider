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
exports.BalansEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let BalansEntity = class BalansEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'Unique Id' }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], BalansEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'Id user provaider ' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BalansEntity.prototype, "id_provaider", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'balance', description: 'Query client' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BalansEntity.prototype, "query", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'wallet', description: 'Client Wallet' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BalansEntity.prototype, "wallet", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'false', description: 'Request was delivered to the provider' }),
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], BalansEntity.prototype, "valid", void 0);
BalansEntity = __decorate([
    (0, typeorm_1.Entity)()
], BalansEntity);
exports.BalansEntity = BalansEntity;
//# sourceMappingURL=balans.entity.js.map
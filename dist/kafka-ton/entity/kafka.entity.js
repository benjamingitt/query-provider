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
exports.KafkaMessage = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let KafkaMessage = class KafkaMessage {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'Unique Id' }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], KafkaMessage.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'Hash user provaider' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], KafkaMessage.prototype, "hash", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'nonce', description: 'Client nonce' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], KafkaMessage.prototype, "nonce", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'message', description: 'Client Message' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], KafkaMessage.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'key', description: 'Kafka key' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], KafkaMessage.prototype, "key", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'false', description: 'Request was delivered to the provider' }),
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], KafkaMessage.prototype, "valid", void 0);
KafkaMessage = __decorate([
    (0, typeorm_1.Entity)()
], KafkaMessage);
exports.KafkaMessage = KafkaMessage;
//# sourceMappingURL=kafka.entity.js.map
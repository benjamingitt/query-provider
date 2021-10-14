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
exports.KafkaTonController = void 0;
const common_1 = require("@nestjs/common");
const fixed_kafkajsnestjs_1 = require("fixed-kafkajsnestjs");
const kafka_ton_service_1 = require("./kafka-ton.service");
let KafkaTonController = class KafkaTonController {
    constructor(kafkaTonService, client) {
        this.kafkaTonService = kafkaTonService;
        this.client = client;
    }
    onModuleInit() {
        this.client.subscribeToResponseOf('notifications-8', this);
    }
    async getWorld(data, key, offset, timestamp) {
        this.kafkaTonService.AcceptMessage(data, key);
    }
};
__decorate([
    (0, fixed_kafkajsnestjs_1.SubscribeTo)('notifications-8'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Number, Number]),
    __metadata("design:returntype", Promise)
], KafkaTonController.prototype, "getWorld", null);
KafkaTonController = __decorate([
    (0, common_1.Controller)('kafka-ton'),
    __param(1, (0, common_1.Inject)('TON_SERVICE')),
    __metadata("design:paramtypes", [kafka_ton_service_1.KafkaTonService,
        fixed_kafkajsnestjs_1.KafkaService])
], KafkaTonController);
exports.KafkaTonController = KafkaTonController;
//# sourceMappingURL=kafka-ton.controller.js.map
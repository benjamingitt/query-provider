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
exports.KafkaTonService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_http_promise_1 = require("nestjs-http-promise");
const typeorm_2 = require("typeorm");
const kafka_entity_1 = require("./entity/kafka.entity");
let KafkaTonService = class KafkaTonService {
    constructor(httpService, kafkaRepository) {
        this.httpService = httpService;
        this.kafkaRepository = kafkaRepository;
    }
    async AcceptMessage(messageKafka, keyKafka) {
        const [hash, nonce, message] = messageKafka.split(' ');
        const msgEntity = {
            hash: hash,
            nonce: nonce,
            message: message,
            key: keyKafka,
        };
        await this.kafkaRepository.save(msgEntity);
        await this.callSomeServer(msgEntity);
    }
    async callSomeServer(newMessage) {
        const data2 = await this.httpService.post('https://query.defispace.com/send', newMessage);
        return data2;
    }
};
KafkaTonService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(kafka_entity_1.KafkaMessage)),
    __metadata("design:paramtypes", [nestjs_http_promise_1.HttpService,
        typeorm_2.Repository])
], KafkaTonService);
exports.KafkaTonService = KafkaTonService;
//# sourceMappingURL=kafka-ton.service.js.map
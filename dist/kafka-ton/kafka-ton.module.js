"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KafkaTonModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const fixed_kafkajsnestjs_1 = require("fixed-kafkajsnestjs");
const nestjs_http_promise_1 = require("nestjs-http-promise");
const kafka_entity_1 = require("./entity/kafka.entity");
const kafka_ton_controller_1 = require("./kafka-ton.controller");
const kafka_ton_service_1 = require("./kafka-ton.service");
let KafkaTonModule = class KafkaTonModule {
};
KafkaTonModule = __decorate([
    (0, common_1.Module)({
        imports: [nestjs_http_promise_1.HttpModule, typeorm_1.TypeOrmModule.forFeature([kafka_entity_1.KafkaMessage]),
            fixed_kafkajsnestjs_1.KafkaModule.register([
                {
                    name: 'TON_SERVICE',
                    options: {
                        client: {
                            brokers: ['notification.services.tonlabs.io:29092'],
                            sasl: {
                                mechanism: 'scram-sha-512',
                                username: 'rad',
                                password: 'local-century-light-road'
                            },
                        },
                        consumer: {
                            groupId: 'notifications-8'
                        }
                    }
                },
            ]),
        ],
        controllers: [kafka_ton_controller_1.KafkaTonController],
        providers: [kafka_ton_service_1.KafkaTonService],
        exports: [typeorm_1.TypeOrmModule,]
    })
], KafkaTonModule);
exports.KafkaTonModule = KafkaTonModule;
//# sourceMappingURL=kafka-ton.module.js.map
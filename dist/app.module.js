"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const gton_controller_1 = require("./gton/gton.controller");
const gton_service_1 = require("./gton/gton.service");
const gton_module_1 = require("./gton/gton.module");
const balance_service_1 = require("./balance/balance.service");
const balance_controller_1 = require("./balance/balance.controller");
const balance_module_1 = require("./balance/balance.module");
const typeorm_1 = require("@nestjs/typeorm");
const ormconfig_1 = require("./ormconfig");
const nestjs_http_promise_1 = require("nestjs-http-promise");
const subscribe_module_1 = require("./subscribe/subscribe.module");
const kafka_ton_controller_1 = require("./kafka-ton/kafka-ton.controller");
const kafka_ton_module_1 = require("./kafka-ton/kafka-ton.module");
const kafka_ton_service_1 = require("./kafka-ton/kafka-ton.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [gton_module_1.GtonModule, balance_module_1.BalanceModule, typeorm_1.TypeOrmModule.forRoot(ormconfig_1.default), nestjs_http_promise_1.HttpModule, subscribe_module_1.SubscribeModule, kafka_ton_module_1.KafkaTonModule],
        controllers: [app_controller_1.AppController, gton_controller_1.GtonController, balance_controller_1.BalanceController, kafka_ton_controller_1.KafkaTonController],
        providers: [app_service_1.AppService, gton_service_1.GtonService, balance_service_1.BalanceService, kafka_ton_service_1.KafkaTonService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
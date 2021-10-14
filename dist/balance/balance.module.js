"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BalanceModule = void 0;
const balans_entity_1 = require("./entity/balans.entity");
const nestjs_http_promise_1 = require("nestjs-http-promise");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const balance_controller_1 = require("./balance.controller");
const balance_service_1 = require("./balance.service");
let BalanceModule = class BalanceModule {
};
BalanceModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([balans_entity_1.BalansEntity]), nestjs_http_promise_1.HttpModule.register({
                timeout: 5000,
                maxRedirects: 5,
            })
        ],
        controllers: [balance_controller_1.BalanceController],
        providers: [balance_service_1.BalanceService],
        exports: [typeorm_1.TypeOrmModule]
    })
], BalanceModule);
exports.BalanceModule = BalanceModule;
//# sourceMappingURL=balance.module.js.map
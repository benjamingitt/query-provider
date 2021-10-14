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
exports.BalanceService = void 0;
const createQueryDto_1 = require("../dto/createQueryDto");
const balans_entity_1 = require("./entity/balans.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const core_1 = require("@tonclient/core");
const lib_node_1 = require("@tonclient/lib-node");
const typeorm_2 = require("typeorm");
const nestjs_http_promise_1 = require("nestjs-http-promise");
let BalanceService = class BalanceService {
    constructor(httpService, balanceRepository) {
        this.httpService = httpService;
        this.balanceRepository = balanceRepository;
    }
    async createQuery(createQueryDto) {
        const newQuery = new balans_entity_1.BalansEntity();
        Object.assign(newQuery, createQueryDto);
        this.subscription(newQuery);
        return await this.balanceRepository.save(newQuery);
    }
    subscription(newSubBalance) {
        core_1.TonClient.useBinaryLibrary(lib_node_1.libNode);
        const networks = 'net.ton.dev';
        const client = new core_1.TonClient({
            network: {
                endpoints: [networks],
            }
        });
        const subscriptionAccountHandle = (client.net.subscribe_collection({
            collection: "accounts",
            filter: { id: { eq: "0:f52f6e74454263dee8cfea3cc45745e67e27b11a37b2dd342182cbd20dc5d16e" } },
            result: "balance",
        }, async (d) => {
            newSubBalance.balance = parseInt(d.result.balance);
            const baseQuery = await this.balanceRepository.findOne({ wallet: newSubBalance.wallet });
            console.log(baseQuery.id_provaider);
            const data = {
                "id": baseQuery.id_provaider,
                "balance": newSubBalance.balance
            };
            this.callSomeServer(data);
            console.log(newSubBalance.balance);
        }));
    }
    async callSomeServer(newSubBalance) {
        const data2 = await this.httpService.post('http://178.170.47.43:5001/auth/send', newSubBalance);
    }
};
BalanceService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(balans_entity_1.BalansEntity)),
    __metadata("design:paramtypes", [nestjs_http_promise_1.HttpService,
        typeorm_2.Repository])
], BalanceService);
exports.BalanceService = BalanceService;
//# sourceMappingURL=balance.service.js.map
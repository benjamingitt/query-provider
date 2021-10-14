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
exports.GtonController = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@tonclient/core");
const lib_node_1 = require("@tonclient/lib-node");
let GtonController = class GtonController {
    async findAll() {
        core_1.TonClient.useBinaryLibrary(lib_node_1.libNode);
        const networks = 'net.ton.dev';
        const client = new core_1.TonClient({
            network: {
                endpoints: [networks],
            }
        });
        const wallet = "0:f52f6e74454263dee8cfea3cc45745e67e27b11a37b2dd342182cbd20dc5d16e";
        const subscriptionAccountHandle = (await client.net.subscribe_collection({
            collection: "accounts",
            filter: { id: { eq: wallet } },
            result: "balance",
        }, (d) => {
            console.log(">>> Account subscription triggered ", parseInt(d.result.balance));
            console.log();
        })).handle;
    }
};
__decorate([
    (0, common_1.Get)('gton'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GtonController.prototype, "findAll", null);
GtonController = __decorate([
    (0, common_1.Controller)()
], GtonController);
exports.GtonController = GtonController;
//# sourceMappingURL=gton.controller.js.map
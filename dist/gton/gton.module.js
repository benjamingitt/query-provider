"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GtonModule = void 0;
const common_1 = require("@nestjs/common");
const gton_service_1 = require("./gton.service");
const gton_controller_1 = require("./gton.controller");
let GtonModule = class GtonModule {
};
GtonModule = __decorate([
    (0, common_1.Module)({
        providers: [gton_service_1.GtonService],
        controllers: [gton_controller_1.GtonController]
    })
], GtonModule);
exports.GtonModule = GtonModule;
//# sourceMappingURL=gton.module.js.map
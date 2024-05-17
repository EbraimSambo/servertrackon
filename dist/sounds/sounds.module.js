"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoundsModule = void 0;
const common_1 = require("@nestjs/common");
const sounds_service_1 = require("./sounds.service");
const sounds_controller_1 = require("./sounds.controller");
let SoundsModule = class SoundsModule {
};
exports.SoundsModule = SoundsModule;
exports.SoundsModule = SoundsModule = __decorate([
    (0, common_1.Module)({
        controllers: [sounds_controller_1.SoundsController],
        providers: [sounds_service_1.SoundsService],
    })
], SoundsModule);
//# sourceMappingURL=sounds.module.js.map
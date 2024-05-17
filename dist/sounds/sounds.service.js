"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoundsService = void 0;
const common_1 = require("@nestjs/common");
const sounds_1 = require("./sounds");
let SoundsService = class SoundsService {
    create(createSoundDto) {
        return 'This action adds a new sound';
    }
    findAll() {
        return sounds_1.sounds;
    }
    findOne(id) {
        return `This action returns a #${id} sound`;
    }
    update(id, updateSoundDto) {
        return `This action updates a #${id} sound`;
    }
    remove(id) {
        return `This action removes a #${id} sound`;
    }
};
exports.SoundsService = SoundsService;
exports.SoundsService = SoundsService = __decorate([
    (0, common_1.Injectable)()
], SoundsService);
//# sourceMappingURL=sounds.service.js.map
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
exports.SoundsController = void 0;
const common_1 = require("@nestjs/common");
const sounds_service_1 = require("./sounds.service");
const create_sound_dto_1 = require("./dto/create-sound.dto");
const update_sound_dto_1 = require("./dto/update-sound.dto");
let SoundsController = class SoundsController {
    constructor(soundsService) {
        this.soundsService = soundsService;
    }
    create(createSoundDto) {
        return this.soundsService.create(createSoundDto);
    }
    findAll() {
        return this.soundsService.findAll();
    }
    findOne(id) {
        return this.soundsService.findOne(+id);
    }
    update(id, updateSoundDto) {
        return this.soundsService.update(+id, updateSoundDto);
    }
    remove(id) {
        return this.soundsService.remove(+id);
    }
};
exports.SoundsController = SoundsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_sound_dto_1.CreateSoundDto]),
    __metadata("design:returntype", void 0)
], SoundsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SoundsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SoundsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_sound_dto_1.UpdateSoundDto]),
    __metadata("design:returntype", void 0)
], SoundsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SoundsController.prototype, "remove", null);
exports.SoundsController = SoundsController = __decorate([
    (0, common_1.Controller)('sounds'),
    __metadata("design:paramtypes", [sounds_service_1.SoundsService])
], SoundsController);
//# sourceMappingURL=sounds.controller.js.map
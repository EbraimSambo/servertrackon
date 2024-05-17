"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSoundDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_sound_dto_1 = require("./create-sound.dto");
class UpdateSoundDto extends (0, mapped_types_1.PartialType)(create_sound_dto_1.CreateSoundDto) {
}
exports.UpdateSoundDto = UpdateSoundDto;
//# sourceMappingURL=update-sound.dto.js.map
import { Injectable } from '@nestjs/common';
import { CreateSoundDto } from './dto/create-sound.dto';
import { UpdateSoundDto } from './dto/update-sound.dto';
import { sounds } from './sounds';

@Injectable()
export class SoundsService {
  create(createSoundDto: CreateSoundDto) {
    return 'This action adds a new sound';
  }

  findAll() {
    return sounds;
  }

  findOne(id: number) {
    return `This action returns a #${id} sound`;
  }

  update(id: number, updateSoundDto: UpdateSoundDto) {
    return `This action updates a #${id} sound`;
  }

  remove(id: number) {
    return `This action removes a #${id} sound`;
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SoundsService } from './sounds.service';
import { CreateSoundDto } from './dto/create-sound.dto';
import { UpdateSoundDto } from './dto/update-sound.dto';

@Controller('sounds')
export class SoundsController {
  constructor(private readonly soundsService: SoundsService) {}

  @Post()
  create(@Body() createSoundDto: CreateSoundDto) {
    return this.soundsService.create(createSoundDto);
  }

  @Get()
  findAll() {
    return this.soundsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.soundsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSoundDto: UpdateSoundDto) {
    return this.soundsService.update(+id, updateSoundDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.soundsService.remove(+id);
  }
}

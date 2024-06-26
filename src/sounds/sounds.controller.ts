import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { SoundsService } from './sounds.service';
import { CreateSoundDto } from './dto/create-sound.dto';
import { UpdateSoundDto } from './dto/update-sound.dto';
import { JwtGuardSounds } from './guards/soundJwt.guard';

@Controller('sounds')
export class SoundsController {
  constructor(private readonly soundsService: SoundsService) {}

  @Post()
  create(@Body() createSoundDto: CreateSoundDto) {
    return this.soundsService.create(createSoundDto);
  }

  @UseGuards(JwtGuardSounds)
  @Get()
  findAll() {
    return this.soundsService.findAll();
  }

  @UseGuards(JwtGuardSounds)
  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    console.log(slug)
    return this.soundsService.findOne(slug);
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

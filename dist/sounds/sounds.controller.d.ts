import { SoundsService } from './sounds.service';
import { CreateSoundDto } from './dto/create-sound.dto';
import { UpdateSoundDto } from './dto/update-sound.dto';
export declare class SoundsController {
    private readonly soundsService;
    constructor(soundsService: SoundsService);
    create(createSoundDto: CreateSoundDto): string;
    findAll(): {
        id: number;
        title: string;
        slug: string;
        artist: string;
        audio: string;
        cover: string;
    }[];
    findOne(slug: string): {
        id: number;
        title: string;
        slug: string;
        artist: string;
        audio: string;
        cover: string;
    };
    update(id: string, updateSoundDto: UpdateSoundDto): string;
    remove(id: string): string;
}

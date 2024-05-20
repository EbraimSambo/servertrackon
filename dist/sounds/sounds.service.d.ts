import { CreateSoundDto } from './dto/create-sound.dto';
import { UpdateSoundDto } from './dto/update-sound.dto';
export declare class SoundsService {
    create(createSoundDto: CreateSoundDto): string;
    findAll(): {
        id: number;
        title: string;
        slug: any;
        artist: string;
        audio: string;
        cover: string;
    }[];
    findOne(slug: string): {
        id: number;
        title: string;
        slug: any;
        artist: string;
        audio: string;
        cover: string;
    };
    update(id: number, updateSoundDto: UpdateSoundDto): string;
    remove(id: number): string;
}

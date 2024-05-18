import { CreateSoundDto } from './dto/create-sound.dto';
import { UpdateSoundDto } from './dto/update-sound.dto';
export declare class SoundsService {
    create(createSoundDto: CreateSoundDto): string;
    findAll(): ({
        id: number;
        title: string;
        slug: any;
        artist: string;
        cover: string;
        audio?: undefined;
    } | {
        id: number;
        slug: any;
        title: string;
        audio: string;
        cover: string;
        artist?: undefined;
    } | {
        id: number;
        slug: any;
        title: string;
        artist: string;
        audio: string;
        cover: string;
    })[];
    findOne(id: number): string;
    update(id: number, updateSoundDto: UpdateSoundDto): string;
    remove(id: number): string;
}

import { Test, TestingModule } from '@nestjs/testing';
import { SoundsService } from './sounds.service';

describe('SoundsService', () => {
  let service: SoundsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SoundsService],
    }).compile();

    service = module.get<SoundsService>(SoundsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

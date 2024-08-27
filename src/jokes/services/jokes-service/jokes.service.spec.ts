import { Test, TestingModule } from '@nestjs/testing';
import { JokesService } from './jokes.service';

describe('JokesServiceService', () => {
  let service: JokesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JokesService],
    }).compile();

    service = module.get<JokesService>(JokesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

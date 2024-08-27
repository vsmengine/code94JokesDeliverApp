import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JokeEntity } from 'src/jokes/entities/joke.entity';
import { Repository } from 'typeorm';

@Injectable()
export class JokesService {
  constructor(
    @InjectRepository(JokeEntity)
    private jokeRepository: Repository<JokeEntity>,
  ) {}

  async getAllJokes(): Promise<JokeEntity[]> {
    return this.jokeRepository.find();
  }

  async addJoke(joke: JokeEntity): Promise<JokeEntity> {
    return this.jokeRepository.save(joke);
  }

  // Add other repository methods
}

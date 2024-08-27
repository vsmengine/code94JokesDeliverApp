import { Module } from '@nestjs/common';
import { JokesController } from './controllers/jokes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JokeEntity } from './entities/joke.entity';
import { JokesService } from './services/jokes-service/jokes.service';

@Module({
  imports: [TypeOrmModule.forFeature([JokeEntity])],
  controllers: [JokesController],
  providers: [JokesService],
})
export class JokesModule {}

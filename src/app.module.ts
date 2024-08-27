import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JokesModule } from './jokes/jokes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JokeEntity } from './jokes/entities/joke.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql_server',
      port: 3306,
      username: 'root',
      password: 'secret',
      database: 'test1',
      entities: [JokeEntity],
      synchronize: true,
    }),
    JokesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

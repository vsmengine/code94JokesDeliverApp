/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { JokeEntity } from '../entities/joke.entity';
import { JokesService } from '../services/jokes-service/jokes.service';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Jokes')
@Controller('jokes')
export class JokesController {
    constructor(
        private readonly jokesService: JokesService
    ) {}

    @Get()
    @ApiResponse({ status: 200, description: 'The list of jokes fetched.'})
    @ApiResponse({ status: 500, description: 'A server error is occured.'})
    async getAllJokes(): Promise<JokeEntity[]> {
        return this.jokesService.getAllJokes();
    }

    @Post()
    @ApiResponse({ status: 200, description: 'The joke is created.'})
    @ApiResponse({ status: 500, description: 'A server error is occured.'})
    @ApiBody({
       type: JokeEntity,
       description: 'Joke jdon object',
    })
    async create(@Body() joke: JokeEntity): Promise<JokeEntity> {
        return this.jokesService.addJoke(joke);
    }
}

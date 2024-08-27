import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class JokeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Joke title', required: true })
  @Column()
  title: string;

  @ApiProperty({ example: 'Joke author', required: true })
  @Column()
  author: string;

  @ApiProperty({ example: 'Joke content', required: true })
  @Column()
  content: string;

  @ApiProperty({ example: 'Joke category', required: true })
  @Column()
  category: string;
}

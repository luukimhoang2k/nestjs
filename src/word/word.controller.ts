import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateWord } from 'src/dto/word';
import { WordService } from './word.service';

@Controller('word')
export class WordController {
  constructor(private wordService: WordService) {}

  @Get()
  getAllWords() {
    return this.wordService.getAllWords();
  }

  @Get('search/:id')
  getFindWord(@Param('id', ParseIntPipe) id: number) {
    const word = this.wordService.findWord(id);
    if (word) {
      return word;
    } else throw new HttpException('Word Not Found!', HttpStatus.NOT_FOUND);
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createWord(@Body() createWordDto: CreateWord) {
    this.wordService.createWord(createWordDto);
  }
}

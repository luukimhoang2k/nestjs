import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateWordDto } from 'src/dto/word';
import { WordService } from './word.service';

@Controller('word')
export class WordController {
  constructor(private wordService: WordService) {}

  @Get()
  getAllWords() {
    return this.wordService.findAllWords();
  }

  @Post()
  @UsePipes(ValidationPipe)
  createWord(@Body() createWordDto: CreateWordDto) {
    return this.wordService.createWord(createWordDto);
  }

  @Post('find/:id')
  findIdWord(@Param('id') id: number) {
    return this.wordService.findIdWord(id);
  }

  @Delete(':id')
  deleteWord(@Param('id') id: number) {
    return this.wordService.removeWord(id);
  }
}

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
import { CreateWordDto } from 'src/dto/word';
import { WordService } from './word.service';

@Controller('word')
export class WordController {
  constructor(private wordService: WordService) {}

  @Post()
  @UsePipes(ValidationPipe)
  createWord(@Body() createWordDto: CreateWordDto) {
    return this.wordService.createWord(createWordDto);
  }
}

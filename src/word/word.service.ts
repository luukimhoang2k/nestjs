import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateWordDto } from 'src/dto/word';
import { Word as WordEntity } from 'src/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class WordService {
  constructor(
    @InjectRepository(WordEntity)
    private readonly wordsRepository: Repository<WordEntity>,
  ) {}

  createWord(createWordDto: CreateWordDto) {
    const newWord = this.wordsRepository.create(createWordDto);
    return this.wordsRepository.save(newWord);
  }
}

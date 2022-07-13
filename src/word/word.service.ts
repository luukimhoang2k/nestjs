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

  async findAllWords(): Promise<WordEntity[]> {
    return this.wordsRepository.find();
  }

  findIdWord(id: number): Promise<WordEntity> {
    return this.wordsRepository.findOneBy({ id });
  }

  async removeWord(id: number): Promise<void> {
    await this.wordsRepository.delete(id);
  }

  createWord(createWordDto: CreateWordDto) {
    const newWord = this.wordsRepository.create(createWordDto);
    return this.wordsRepository.save(newWord);
  }
}

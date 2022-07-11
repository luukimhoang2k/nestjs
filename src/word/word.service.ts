import { Injectable } from '@nestjs/common';
import { CreateWord } from 'src/dto/word';
import { Word } from 'src/types/Word';

@Injectable()
export class WordService {
  private words: Word[] = [
    { id: 1, text: 'a' },
    { id: 2, text: 'b' },
    { id: 3, text: 'c' },
  ];

  getAllWords() {
    return {
      data: this.words,
    };
  }

  findWord(id: number) {
    return this.words.find((word) => word.id === id);
  }

  createWord(createWordDto: CreateWord) {
    const newWords = [...this.words];
    newWords.push(createWordDto);
    newWords.sort((a, b) => a.id - b.id);
    this.words = newWords;
  }
}

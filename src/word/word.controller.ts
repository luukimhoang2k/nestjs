import { Controller, Get } from '@nestjs/common';
import { WordService } from './word.service';

export interface person {
  id : string,
  username: string,
  email: string ,
  phoneNumber: string
}

export interface user {

}

export class responseHandler {
  constructor(success,data,statusCode){
    this.success = success
    this.data = data
    this.statusCode = statusCode
  }
  success
  data
  statusCode
}


@Controller('word')
export class WordController {
  constructor(private readonly wordService: WordService) {}

  @Get()
  getHello(): person[] {
    return this.wordService.getHello();
    // return new responseHandler(true,[],200)
  }

  
}

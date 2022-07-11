import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateWord {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  text: string;
}

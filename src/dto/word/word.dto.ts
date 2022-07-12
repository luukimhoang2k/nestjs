import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateWordDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  text: string;
}

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Word {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;

  @Column({
    nullable: false,
    default: 'a',
  })
  text: string;
}

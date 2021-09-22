import { IsString, IsNotEmpty } from 'class-validator';

export class MessageDto {
  @IsString({ message: 'O texto da mensagem deve ser uma String.' })
  @IsNotEmpty({ message: 'O texto da mensagem não deve estar vazio.' })
  texto: string;
}

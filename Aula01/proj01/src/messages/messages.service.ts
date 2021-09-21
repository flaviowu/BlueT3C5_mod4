import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
  public messages = [
    {
      id: 1,
      texto: 'Primeira mensagem A',
    },
    {
      id: 2,
      texto: 'Segunda mensagem B',
    },
    {
      id: 3,
      texto: 'Terceira mensagem C',
    },
    {
      id: 4,
      texto: 'Quarta mensagem D',
    },
  ];

  add(message: { id: number; texto: string }) {
    this.messages.push(message);
  }
  findAll() {
    return this.messages;
  }

  findById(id: number) {
    return this.messages.find((message) => message.id === id);
  }
}

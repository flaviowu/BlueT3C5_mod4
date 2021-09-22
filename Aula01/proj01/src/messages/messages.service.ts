import { Injectable } from '@nestjs/common';
import { Message } from './Message';
import { MessageDto } from './MessageDto';

@Injectable()
export class MessagesService {
  public messages: Message[] = [
    {
      id: 1,
      texto: 'Primeira mensagem A1',
    },
    {
      id: 2,
      texto: 'Segunda mensagem B2',
    },
    {
      id: 3,
      texto: 'Terceira mensagem C3',
    },
    {
      id: 4,
      texto: 'Quarta mensagem D4',
    },
  ];

  add(messageDto: MessageDto) {
    const id = this.messages.length + 1;
    const message: Message = {
      id,
      ...messageDto,
    };
    this.messages.push(message);
    return message;
  }

  findAll() {
    return this.messages.filter(Boolean);
  }

  async findById(id: number) {
    const message = this.messages.find((message) => message.id === id);
    if (!message) {
      throw Error(`Mensagem com id ${id} não encontrado!`);
    }
    return message;
  }

  update(id: number, messageDto: MessageDto) {
    const index = this.messages.findIndex((msg) => msg.id === id);
    const message: Message = {
      id,
      ...messageDto,
    };
    this.messages[index] = message;
    return message;
  }
  delete(id: number) {
    const index = this.messages.findIndex((msg) => msg.id === id);
    this.messages.splice(index, 1);
    return true;
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Olá, bem vindo ao inferno. Abandonem todas as suas esperanças antes de entrar.';
  }
}

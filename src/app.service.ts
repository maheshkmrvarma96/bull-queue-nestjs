import { Injectable } from '@nestjs/common';
import { MessageProducerService } from './message-producer/message-producer.service';

@Injectable()
export class AppService {
  constructor(
    private readonly messageProducerService: MessageProducerService,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  sendMessage(msg: string) {
    this.messageProducerService.sendMessage(msg);
  }
}

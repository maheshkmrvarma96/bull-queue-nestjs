import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BullModule } from '@nestjs/bull';
import { MessageProducerService } from './message-producer/message-producer.service';
import { MessageConsumerService } from './message-consumer/message-consumer.service';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    BullModule.registerQueue({
      name: 'message-queue',
    }),
  ],
  controllers: [AppController],
  providers: [AppService, MessageProducerService, MessageConsumerService],
})
export class AppModule {}

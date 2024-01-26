import { Process, Processor } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';

@Processor('message-queue')
@Injectable()
export class MessageConsumerService {
  @Process('message-job')
  async readOperationJob(job: any) {
    console.log('consumer', job.data);
  }
}

import { Controller, Inject } from '@nestjs/common';
import { KafkaService, SubscribeTo } from 'fixed-kafkajsnestjs';
import { KafkaTonService } from './kafka-ton.service';

@Controller('kafka-ton')
export class KafkaTonController {
    constructor(
        private readonly kafkaTonService: KafkaTonService,
        @Inject('TON_SERVICE') private client: KafkaService
      ) {}

      onModuleInit(): void {
        this.client.subscribeToResponseOf('notifications-8', this)
      }

      @SubscribeTo('notifications-8')
        async getWorld(data: any, key: any, offset: number, timestamp: number): Promise<void> {
           this.kafkaTonService.AcceptMessage(data, key)
        }
}

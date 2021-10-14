import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KafkaModule } from 'fixed-kafkajsnestjs';
import { HttpModule } from 'nestjs-http-promise';
import { KafkaMessage } from './entity/kafka.entity';
import { KafkaTonController } from './kafka-ton.controller';
import { KafkaTonService } from './kafka-ton.service';

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([KafkaMessage]),
    KafkaModule.register([
      {
        name: 'TON_SERVICE',
        options: {
            client: {
              brokers: ['notification.services.tonlabs.io:29092'],
              sasl: {
              mechanism: 'scram-sha-512', // scram-sha-256 or scram-sha-512
              username: 'rad',
              password: 'local-century-light-road'
            },
          },
          consumer: {
            groupId: 'notifications-8'
          }
        }
      },
    ]),
  ],
  controllers: [KafkaTonController],
  providers: [KafkaTonService],
  exports: [TypeOrmModule,]
})
export class KafkaTonModule {}

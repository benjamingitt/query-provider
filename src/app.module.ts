import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GtonController } from './gton/gton.controller';
import { GtonService } from './gton/gton.service';
import { GtonModule } from './gton/gton.module';
import { BalanceService } from './balance/balance.service';
import { BalanceController } from './balance/balance.controller';
import { BalanceModule } from './balance/balance.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from './ormconfig';
import { HttpModule } from 'nestjs-http-promise'
import { SubscribeModule } from './subscribe/subscribe.module';
import { KafkaTonController } from './kafka-ton/kafka-ton.controller';
import { KafkaTonModule } from './kafka-ton/kafka-ton.module';
import { KafkaTonService } from './kafka-ton/kafka-ton.service';

@Module({
  imports: [GtonModule, BalanceModule, TypeOrmModule.forRoot(ormconfig), HttpModule, SubscribeModule, KafkaTonModule],
  controllers: [AppController, GtonController, BalanceController, KafkaTonController],
  providers: [AppService, GtonService, BalanceService, KafkaTonService],
})
export class AppModule {}

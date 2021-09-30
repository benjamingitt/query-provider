import { BalansEntity } from '@app/balance/entity/balans.entity';
import { HttpModule } from 'nestjs-http-promise'
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BalanceController } from './balance.controller';
import { BalanceService } from './balance.service';

@Module({
  imports: [TypeOrmModule.forFeature([BalansEntity]),  HttpModule.register({
    timeout: 5000,
    maxRedirects: 5,
  })
],
  controllers: [BalanceController],
  providers: [BalanceService],
  exports: [TypeOrmModule]
})
export class BalanceModule {}

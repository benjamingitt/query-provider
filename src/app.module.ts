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

@Module({
  imports: [GtonModule, BalanceModule, TypeOrmModule.forRoot(ormconfig), HttpModule],
  controllers: [AppController, GtonController, BalanceController],
  providers: [AppService, GtonService, BalanceService,],
})
export class AppModule {}

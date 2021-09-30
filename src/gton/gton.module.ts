import { Module } from '@nestjs/common';
import { GtonService } from './gton.service';
import { GtonController } from './gton.controller';

@Module({
  providers: [GtonService],
  controllers: [GtonController]
})
export class GtonModule {}

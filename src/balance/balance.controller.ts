import { createQueryDto } from '@app/dto/createQueryDto';
import { BalansEntity } from '@app/balance/entity/balans.entity';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { BalanceService } from './balance.service';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { HttpService } from 'nestjs-http-promise';
import { ApiResponse } from '@nestjs/swagger';


@Controller('balance')
export class BalanceController {
    constructor(private readonly httpService: HttpService, private readonly balanceService: BalanceService ){}
    @ApiResponse({status: 200})

    @Post('new')
    async createQuery(@Body() createQueryDto: createQueryDto):
    Promise<BalansEntity> {
        return this.balanceService.createQuery(createQueryDto);
    }

}


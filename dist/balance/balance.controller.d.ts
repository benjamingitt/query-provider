import { createQueryDto } from '@app/dto/createQueryDto';
import { BalansEntity } from '@app/balance/entity/balans.entity';
import { BalanceService } from './balance.service';
import { HttpService } from 'nestjs-http-promise';
export declare class BalanceController {
    private readonly httpService;
    private readonly balanceService;
    constructor(httpService: HttpService, balanceService: BalanceService);
    createQuery(createQueryDto: createQueryDto): Promise<BalansEntity>;
}

import { createQueryDto } from '@app/dto/createQueryDto';
import { BalansEntity } from '@app/balance/entity/balans.entity';
import { Repository } from 'typeorm';
import { HttpService } from 'nestjs-http-promise';
export declare class BalanceService {
    private readonly httpService;
    private readonly balanceRepository;
    constructor(httpService: HttpService, balanceRepository: Repository<BalansEntity>);
    createQuery(createQueryDto: createQueryDto): Promise<BalansEntity>;
    private subscription;
    private callSomeServer;
}

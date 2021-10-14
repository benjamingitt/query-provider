import { createQueryDto } from '@app/dto/createQueryDto';
import { BalansEntity } from '@app/balance/entity/balans.entity';
import { Get, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TonClient } from '@tonclient/core';
import { libNode } from '@tonclient/lib-node';
import { Any, Repository } from 'typeorm';
import { HttpService } from 'nestjs-http-promise';


@Injectable()
export class BalanceService {
    constructor(
        private readonly httpService: HttpService,
        @InjectRepository(BalansEntity)
        private readonly balanceRepository: Repository<BalansEntity>,
    ){}
    
        async createQuery(createQueryDto: createQueryDto): Promise<BalansEntity>  {
        const newQuery = new BalansEntity();
        Object.assign(newQuery, createQueryDto);
        this.subscription(newQuery)

        return await this.balanceRepository.save(newQuery);



    }
    private  subscription(newSubBalance) {
        TonClient.useBinaryLibrary(libNode);
        const networks = 'net.ton.dev';
        const client = new TonClient({
            network: {
                endpoints: [networks],
            }
        })

        const subscriptionAccountHandle = ( client.net.subscribe_collection({
            collection: "accounts",
            filter: { id: { eq: "0:f52f6e74454263dee8cfea3cc45745e67e27b11a37b2dd342182cbd20dc5d16e" } },
            result: "balance",
        }, async (d) => {
            newSubBalance.balance = parseInt(d.result.balance);
            const baseQuery = await this.balanceRepository.findOne({ wallet: newSubBalance.wallet})
            console.log(baseQuery.id_provaider);
            const data = {
                "id": baseQuery.id_provaider,
                "balance": newSubBalance.balance
            }
            this.callSomeServer(data)
            console.log(newSubBalance.balance)

        }));
    }

        private async callSomeServer(newSubBalance)  {

                const data2 = await this.httpService.post( 'http://178.170.47.43:5001/auth/send', newSubBalance);
            }

}

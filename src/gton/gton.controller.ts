import { Controller, Get } from '@nestjs/common';
import { TonClient } from '@tonclient/core';
import { libNode } from '@tonclient/lib-node';
import { Account } from '@tonclient/appkit';

@Controller()
export class GtonController {
    @Get('gton')
    async findAll() {
        TonClient.useBinaryLibrary(libNode);
        const networks = 'net.ton.dev';
        const client = new TonClient({
            network: {
                endpoints: [networks],
            }
        })

        const wallet = "0:f52f6e74454263dee8cfea3cc45745e67e27b11a37b2dd342182cbd20dc5d16e"

        const subscriptionAccountHandle = (await client.net.subscribe_collection({
            collection: "accounts",
            filter: { id: { eq: wallet } },
            result: "balance",
        }, (d) => {
            console.log(">>> Account subscription triggered ", parseInt(d.result.balance));
            console.log();
        })).handle;
    }
}
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HttpService } from 'nestjs-http-promise';
import { Repository } from 'typeorm';
import { KafkaMessage } from './entity/kafka.entity';

@Injectable()
export class KafkaTonService {
    constructor(
        private readonly httpService: HttpService,
        @InjectRepository(KafkaMessage)
        private readonly kafkaRepository: Repository<KafkaMessage>,
    ){}


    async AcceptMessage(messageKafka, keyKafka): Promise<any>{

        const [hash, nonce, message] = messageKafka.split(' ')
        const msgEntity = {
            hash: hash,
            nonce: nonce,
            message: message,
            key: keyKafka,
        }
        console.log(msgEntity)
        await this.kafkaRepository.save(msgEntity)
        await this.callSomeServer(msgEntity)
    }

    private async callSomeServer(newMessage)  {
        const data2 = await this.httpService.post( 'https://query.defispace.com/query/msg', newMessage);
        this.validMessage(newMessage, data2.status)
        return  data2.status
    }
    private async validMessage(msg, status) {
    if(status >= 200 || 299 ){
        const validMassage = await this.kafkaRepository.findOne({ key: msg.key})
        validMassage.valid = true
        return await this.kafkaRepository.save(validMassage)

        }
    }
}

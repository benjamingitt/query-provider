import { HttpService } from 'nestjs-http-promise';
import { Repository } from 'typeorm';
import { KafkaMessage } from './entity/kafka.entity';
export declare class KafkaTonService {
    private readonly httpService;
    private readonly kafkaRepository;
    constructor(httpService: HttpService, kafkaRepository: Repository<KafkaMessage>);
    AcceptMessage(messageKafka: any, keyKafka: any): Promise<any>;
    private callSomeServer;
}

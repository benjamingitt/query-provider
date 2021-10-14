import { KafkaService } from 'fixed-kafkajsnestjs';
import { KafkaTonService } from './kafka-ton.service';
export declare class KafkaTonController {
    private readonly kafkaTonService;
    private client;
    constructor(kafkaTonService: KafkaTonService, client: KafkaService);
    onModuleInit(): void;
    getWorld(data: any, key: any, offset: number, timestamp: number): Promise<void>;
}

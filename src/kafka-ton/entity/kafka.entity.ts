import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class KafkaMessage{
    @ApiProperty({example: '1', description: 'Unique Id'})
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({example: '1', description: 'Hash user provaider'})
    @Column()
    hash: string;

    @ApiProperty({example: 'nonce', description: 'Client nonce'})
    @Column()
    nonce: string;

    @ApiProperty({example: 'message', description: 'Client Message'})
    @Column()
    message: string;

    @ApiProperty({example: 'key', description: 'Kafka key'})
    @Column()
    key: string;


    @ApiProperty({example: 'false', description: 'Request was delivered to the provider'})
    @Column({ default: false })
    valid: boolean;


}
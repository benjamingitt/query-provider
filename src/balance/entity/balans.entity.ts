import { ApiProperty } from "@nestjs/swagger";
import { type } from "os";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class BalansEntity{
    @ApiProperty({example: '1', description: 'Unique Id'})
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({example: '1', description: 'Id user provaider '})
    @Column()
    id_provaider: string;

    @ApiProperty({example: 'balance', description: 'Query client'})
    @Column()
    query: string;

    @ApiProperty({example: 'wallet', description: 'Client Wallet'})
    @Column()
    wallet: string;


    @ApiProperty({example: 'false', description: 'Request was delivered to the provider'})
    @Column({ default: false })
    valid: boolean;


}
import { MigrationInterface, QueryRunner } from "typeorm";
export declare class KafkaKey1633706277387 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}

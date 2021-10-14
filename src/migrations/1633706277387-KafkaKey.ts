import {MigrationInterface, QueryRunner} from "typeorm";

export class KafkaKey1633706277387 implements MigrationInterface {
    name = 'KafkaKey1633706277387'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "kafka_message" ("id" SERIAL NOT NULL, "hash" character varying NOT NULL, "nonce" character varying NOT NULL, "message" character varying NOT NULL, "key" character varying NOT NULL, "valid" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_a7b927b6ba5cd3e3f4085054c66" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "kafka_message"`);
    }

}

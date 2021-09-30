import {MigrationInterface, QueryRunner} from "typeorm";

export class notification1632683379532 implements MigrationInterface {
    name = 'notification1632683379532'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_entity" ("id" SERIAL NOT NULL, "id_provaider" character varying NOT NULL, "query" character varying NOT NULL, "valid" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_b54f8ea623b17094db7667d8206" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user_entity"`);
    }

}

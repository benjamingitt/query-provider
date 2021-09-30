import {MigrationInterface, QueryRunner} from "typeorm";

export class notificationWalletAdd1632740396188 implements MigrationInterface {
    name = 'notificationWalletAdd1632740396188'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "balans_entity" ("id" SERIAL NOT NULL, "id_provaider" character varying NOT NULL, "query" character varying NOT NULL, "wallet" character varying NOT NULL, "valid" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_75b35aa09e42dbe2aebc71eea3f" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "balans_entity"`);
    }

}

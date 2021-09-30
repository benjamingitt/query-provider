import {MigrationInterface, QueryRunner} from "typeorm";

export class notificationBalance1632756037790 implements MigrationInterface {
    name = 'notificationBalance1632756037790'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "new_massege_balance" ("id" SERIAL NOT NULL, "id_provaider" character varying NOT NULL, "wallet" character varying NOT NULL, "balance" character varying NOT NULL, "valid" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_469ac00d3ae62e65cc7a2f2f9ad" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "new_massege_balance"`);
    }

}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notificationWalletAdd1632740396188 = void 0;
class notificationWalletAdd1632740396188 {
    constructor() {
        this.name = 'notificationWalletAdd1632740396188';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "balans_entity" ("id" SERIAL NOT NULL, "id_provaider" character varying NOT NULL, "query" character varying NOT NULL, "wallet" character varying NOT NULL, "valid" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_75b35aa09e42dbe2aebc71eea3f" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "balans_entity"`);
    }
}
exports.notificationWalletAdd1632740396188 = notificationWalletAdd1632740396188;
//# sourceMappingURL=1632740396188-notificationWalletAdd.js.map
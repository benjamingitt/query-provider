"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notificationBalance1632756037790 = void 0;
class notificationBalance1632756037790 {
    constructor() {
        this.name = 'notificationBalance1632756037790';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "new_massege_balance" ("id" SERIAL NOT NULL, "id_provaider" character varying NOT NULL, "wallet" character varying NOT NULL, "balance" character varying NOT NULL, "valid" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_469ac00d3ae62e65cc7a2f2f9ad" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "new_massege_balance"`);
    }
}
exports.notificationBalance1632756037790 = notificationBalance1632756037790;
//# sourceMappingURL=1632756037790-notificationBalance.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notification1632683379532 = void 0;
class notification1632683379532 {
    constructor() {
        this.name = 'notification1632683379532';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "user_entity" ("id" SERIAL NOT NULL, "id_provaider" character varying NOT NULL, "query" character varying NOT NULL, "valid" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_b54f8ea623b17094db7667d8206" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "user_entity"`);
    }
}
exports.notification1632683379532 = notification1632683379532;
//# sourceMappingURL=1632683379532-notification.js.map
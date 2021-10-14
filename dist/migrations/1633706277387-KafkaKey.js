"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KafkaKey1633706277387 = void 0;
class KafkaKey1633706277387 {
    constructor() {
        this.name = 'KafkaKey1633706277387';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "kafka_message" ("id" SERIAL NOT NULL, "hash" character varying NOT NULL, "nonce" character varying NOT NULL, "message" character varying NOT NULL, "key" character varying NOT NULL, "valid" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_a7b927b6ba5cd3e3f4085054c66" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "kafka_message"`);
    }
}
exports.KafkaKey1633706277387 = KafkaKey1633706277387;
//# sourceMappingURL=1633706277387-KafkaKey.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: 'query',
    password: 'query',
    database: 'query',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: false,
    migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
    cli: {
        migrationsDir: 'src/migrations'
    }
};
exports.default = config;
//# sourceMappingURL=ormconfig.js.map
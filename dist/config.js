"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// const DatabaseConfig = {
//     client: 'postgresql',
//     connection: {
//         host: process.env.DATABASE_HOST, 
//         database: process.env.DATABASE_NAME, 
//         user: process.env.DATABASE_USERNAME,
//         password: process.env.DATABASE_PASSWORD,
//         port: process.env.DATABASE_PORT,
//     },
//     pool: {
//         min: process.env.DATABASE_POOL_MIN,
//         max: process.env.DATABASE_POOL_MAX,
//         idle: process.env.DATABASE_POOL_IDLE,
//     },
//     migrations: {
//         tableName: 'KnexMigrations',
//     }
// }

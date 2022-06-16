"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseClient = void 0;
const inversify_1 = require("inversify");
const knex_1 = __importDefault(require("knex"));
let DatabaseClient = class DatabaseClient {
    constructor() {
        this._knex = (0, knex_1.default)({
            client: 'pg',
            connection: {
                host: process.env.DATABASE_HOST,
                database: process.env.DATABASE_NAME,
                user: process.env.DATABASE_USERNAME,
                password: process.env.DATABASE_PASSWORD,
                port: Number(process.env.DATABASE_PORT)
            },
            pool: {
                min: Number(process.env.DATABASE_POOL_MIN),
                max: Number(process.env.DATABASE_POOL_MAX)
            },
            migrations: {
                tableName: 'KnexMigrations',
            },
            acquireConnectionTimeout: 2000
        });
    }
    get knex() {
        return this._knex;
    }
};
DatabaseClient = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], DatabaseClient);
exports.DatabaseClient = DatabaseClient;

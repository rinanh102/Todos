import {injectable} from "inversify";
import knex, { Knex } from "knex";

@injectable()
export class DatabaseClient{
    private _knex: Knex

    constructor(){
        this._knex = knex({
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

    public getknex(): Knex{
        return this._knex
    }
    
}

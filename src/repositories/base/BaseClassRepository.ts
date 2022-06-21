
import { IWrite } from "../interfaces/IWrite.interdace"
import { IRead } from '../interfaces/IRead.interface';
import {TYPES} from "../../core/types.core";
import { inject, injectable } from "inversify";
import {Logger} from "../../services/logger.service";
import { DatabaseClient } from "../../services/database.service";
import { Knex } from "knex";

@injectable()
export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {
    private _knex: Knex;
    // private _tableName: string;

    public constructor(
       databaseClient: DatabaseClient,
    //    tableName: string
    ) {
        this._knex = databaseClient.getknex();
        // this._tableName = tableName;
    }

    find(item: T): Promise<T[]> {
        throw new Error("Method not implemented.");
    }
    findOne(id: string): Promise<T> {
        throw new Error("Method not implemented.");
    }

    async create(item: T): Promise<boolean> {
        try {
            await this._knex('todos').insert(item);
            return true;
        } catch (error){
            console.error(error);
        }
    }

    async update(id: string, item: T): Promise<boolean> {
        try {
            await this._knex('todos')
                .where('id', '=', id)
                .update(item)
            return true;
        } catch (error){
            console.error(error);
        }   
    }

    async delete(id: string): Promise<boolean> {
         try {
            await this._knex('todos')
                .where('id', '=', id)
                .del()
            return true;
        } catch (error) {
            console.error(error);
        }
    }
   
}
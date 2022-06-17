import {Request, Response} from "express";
import {TYPES} from "../core/types.core";
import { inject, injectable } from "inversify";
import {Logger} from "../services/logger.service";
import { DatabaseClient } from "../services/database.service";
import { Knex } from "knex";

@injectable()
export class TodoController {
    private _knex: Knex;

    public constructor(
        @inject(TYPES.Logger) private readonly logger: Logger,
        @inject(TYPES.DatabaseClient) private readonly databaseClient: DatabaseClient
    ) {
        this._knex = databaseClient.getknex();
    }
    

    public async getTodos(req: Request, res: Response) {

        try {
            const rawData = await this._knex.select('*').from('todos');
            return res.send(rawData);
        } catch (error) {
            console.error(error);
        }
    }

    public async createTodo(req: Request, res: Response) {
        const totoData = {
            content: req.body.content
        }
        try {
            await this._knex('todos').insert(totoData);
            return res.send("Create new Todo successfully");
        } catch (error) {
            console.error(error);
        }
    }

    public async updateTodo(req: Request, res: Response) {
        const updateObject = {
            content: req.body.content
        }
        try {
            await this._knex('todos')
                .where('id', '=', req.params.id)
                .update(updateObject)
            return res.send("Update Todo successfully");
        } catch (error) {
            console.error(error)
        }
    }

    public async deleteTodo(req: Request, res: Response) {
        try {
            await this._knex('todos')
                .where('id', '=', req.params.id)
                .del()
            return res.send("Delete toto successfully");
        } catch (error) {
            console.error(error);
        }
    }
}

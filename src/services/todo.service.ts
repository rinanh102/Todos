import {Request, Response} from "express";
import {TYPES} from "../core/types.core";
import { inject, injectable } from "inversify";
import {Logger} from "../services/logger.service";
import { DatabaseClient } from "../services/database.service";
import { Knex } from "knex";
import { TodoRepositoty } from "../repositories/todo.repository";
import { Todo } from "../entities/todo.entity";

@injectable()
export class TodoService{
    private _knex: Knex;
    private _repository: TodoRepositoty;
    public constructor(
        @inject(TYPES.Logger) private readonly logger: Logger,
        @inject(TYPES.DatabaseClient) private readonly databaseClient: DatabaseClient,
        @inject(TYPES.TodoRepositoty) private readonly todoRepository: TodoRepositoty,
        
    ) {
        this._knex = databaseClient.getknex();
        this._repository = todoRepository;
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
        const todo = new Todo(req.body.content)
        const result = await this._repository.create(todo);
        if (result){
            return res.send("Create Todo successfully");
        } else {
            return res.send("Create failed")
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

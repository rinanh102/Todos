import {Request, Response} from "express";
import {TYPES} from "../core/types.core";
import { inject, injectable } from "inversify";
import {Logger} from "../services/logger.service";
import { TodoService } from "../services/todo.service";
import { Knex } from "knex";

@injectable()
export class TodoController {
    public constructor(
        @inject(TYPES.Logger) private readonly logger: Logger,
        @inject(TYPES.TodoService) private readonly todoService: TodoService
    ) {}
    
    public async getTodos(req: Request, res: Response) {
        await this.todoService.getTodos(req,res);
    }

    public async createTodo(req: Request, res: Response) {
        
        await this.todoService.createTodo(req,res);
    }

    public async updateTodo(req: Request, res: Response) {
        await this.todoService.updateTodo(req,res);
    }

    public async deleteTodo(req: Request, res: Response) {
       await this.todoService.deleteTodo(req,res);
    }
}

import {Request, Response} from "express";
import {TYPES} from "../core/types.core";
import { inject, injectable } from "inversify";
import {Logger} from "../services/logger.service";
import { TodoService } from "../services/todo.service";

@injectable()
export class TodoController {
    public constructor(
        @inject(TYPES.Logger) private readonly logger: Logger,
        @inject(TYPES.TodoService) private readonly todoService: TodoService
    ) {}
    
    public getTodos = async (req: Request, res: Response) => {
        await this.todoService.getTodos(req,res);
    }

    public createTodo = async (req: Request, res: Response) => {
        
        await this.todoService.createTodo(req,res);
    }

    public updateTodo = async (req: Request, res: Response) => {
        await this.todoService.updateTodo(req,res);
    }

    public deleteTodo = async (req: Request, res: Response) => {
       await this.todoService.deleteTodo(req,res);
    }
}

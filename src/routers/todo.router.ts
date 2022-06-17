import { TodoController } from "../controllers/todo.controller";
import { container } from "../core/container.core";
import { TYPES } from "../core/types.core";
import { Application, Request, Response } from 'express';

const todoController = container.get<TodoController>(TYPES.TodoController);
export class TodoRoutes {
    public route(app: Application) {

        app.get('/todos', (req: Request, res:Response) => {
            todoController.getTodos(req,res);
        })
        app.post('/todo', (req: Request, res:Response) => {
            todoController.createTodo(req,res);
        })
        app.put('/todo/:id', (req: Request, res:Response) => {
            todoController.updateTodo(req,res);
        })
        app.delete('/todo/:id', (req: Request, res:Response) => {
            todoController.deleteTodo(req,res)
        })
    }
}



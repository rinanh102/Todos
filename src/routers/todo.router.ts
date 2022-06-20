import { Router } from 'express';
import { TodoController } from "../controllers/todo.controller";
import { container } from "../core/container.core";
import { TYPES } from "../core/types.core";
import { Application, Request, Response } from 'express';

const todoController = container.get<TodoController>(TYPES.TodoController);
export default (todoRoutes: Router): void => {
    todoRoutes.route('/todos')
        .get()
    todoRoutes.get('/todos', (req: Request, res:Response) => {
            todoController.getTodos(req,res);
        })
    // todoRoutes.post('/todo', (req: Request, res:Response) => {
    //         todoController.createTodo(req,res);
    //     })
    // todoRoutes.put('/todo/:id', (req: Request, res:Response) => {
    //         todoController.updateTodo(req,res);
    //     })
    // todoRoutes.delete('/todo/:id', (req: Request, res:Response) => {
    //         todoController.deleteTodo(req,res)
    //     })
}



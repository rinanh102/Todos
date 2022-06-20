import { Router } from 'express';
import { TodoController } from "../controllers/todo.controller";
import { container } from "../core/container.core";
import { TYPES } from "../core/types.core";

const todoController = container.get<TodoController>(TYPES.TodoController);


export default (todoRouter: Router): void => {
    todoRouter.route('/todos')
    .get(todoController.getTodos)
    
    todoRouter.route('/todo')
    .post(todoController.createTodo)

    todoRouter.route('/todo/:id')
    .put(todoController.updateTodo)

    todoRouter.route('/todo/:id')
    .delete(todoController.deleteTodo)
    
}



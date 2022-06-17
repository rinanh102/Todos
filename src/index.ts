import "reflect-metadata";
import { container } from "./core/container.core";
import { server } from "./core/server.core";
import { TYPES } from "./core/types.core";
import * as dotenv from 'dotenv';
import express from 'express';
import {DatabaseClient} from "./services/database.service";
dotenv.config();

import { HomeController } from "./controllers/home.controller";
import { TodoController } from "./controllers/todo.controller";


async function main() {
    const app = express()
    app.use(express.json());
    const todoController = container.get<TodoController>(TYPES.TodoController);

    app.get('/todos', (req, res) => {
        console.log("get all111")

        todoController.getTodos(req,res);
    })
    app.post('/todo', (req, res) => {
        todoController.createTodo(req,res);
    })
    app.put('/todo/:id', (req, res) => {
        todoController.updateTodo(req,res);
    })
    app.listen(process.env.PORT,() => {
        console.log(`App listening on port ${process.env.PORT}`)
    })

    // Verify the connection before proceeding
    const databaseClient = new DatabaseClient();
    const knex = databaseClient.getknex();
    try {
        await knex.raw('SELECT now()')
        return knex
    } catch (error) {
        throw new Error('Unable to connect to Postgres via Knex. Ensure a valid connection.')
    }
}

main()
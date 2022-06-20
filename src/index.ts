import "reflect-metadata";
import {Request, Response, NextFunction} from "express";
import { container } from "./core/container.core";
import { TYPES } from "./core/types.core";
import { server } from "./core/server.core";

import * as dotenv from 'dotenv';
import express from 'express';
import * as bodyParser from "body-parser";
dotenv.config();
import clientRouter from "./routers/index";
import { TodoController } from "./controllers/todo.controller";

async function main() {
    const app = express()
    app.use(express.json());
    const todoController = container.get<TodoController>(TYPES.TodoController);
   
    const headerMiddleWare = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            res.set({
                'Content-Type': 'application/json; charset=utf-8',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': '*'
            });
            next();
        } 
        catch (err) {
            console.error(err);
        }
    };
    app.use('', headerMiddleWare, clientRouter);

    app.listen(process.env.PORT,() => {
        console.log(`App listening on port ${process.env.PORT}`)
    })

    // // Verify the connection before proceeding
    // const databaseClient = new DatabaseClient();
    // const knex = databaseClient.getknex();
    // try {
    //     await knex.raw('SELECT now()')
    //     return knex
    // } catch (error) {
    //     throw new Error('Unable to connect to Postgres via Knex. Ensure a valid connection.')
    // }
}

main()
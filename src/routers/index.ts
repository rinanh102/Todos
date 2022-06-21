import { Router } from 'express';
import todoRouter from "./todo.router";

let clientRouter = Router();

todoRouter(clientRouter);

export default clientRouter;

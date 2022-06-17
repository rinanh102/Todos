import {Container} from "inversify";
import {Logger} from "../services/logger.service";
import {TYPES} from "./types.core";
import "../controllers/home.controller";
import { DatabaseClient } from "../services/database.service";
import { HomeController } from "../controllers/home.controller";
import { TodoController } from "../controllers/todo.controller";

export const container = new Container();
container.bind(TYPES.Logger).to(Logger);
container.bind(TYPES.DatabaseClient).to(DatabaseClient).inSingletonScope();
container.bind(TYPES.HomeController).to(HomeController).inSingletonScope();
container.bind(TYPES.TodoController).to(TodoController).inSingletonScope();

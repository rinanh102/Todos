import {Container} from "inversify";
import {Logger} from "../services/logger.service";
import {TYPES} from "./types.core";
import "../controllers/home.controller";

export const container = new Container();
container.bind(TYPES.Logger).to(Logger);
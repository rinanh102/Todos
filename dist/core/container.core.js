"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = void 0;
const inversify_1 = require("inversify");
const logger_service_1 = require("../services/logger.service");
const types_core_1 = require("./types.core");
require("../controllers/home.controller");
const database_service_1 = require("../services/database.service");
const home_controller_1 = require("../controllers/home.controller");
exports.container = new inversify_1.Container();
exports.container.bind(types_core_1.TYPES.Logger).to(logger_service_1.Logger);
exports.container.bind(types_core_1.TYPES.DatabaseClient).to(database_service_1.DatabaseClient).inSingletonScope();
exports.container.bind(types_core_1.TYPES.HomeController).to(home_controller_1.HomeController).inSingletonScope();

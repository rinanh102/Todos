import { BaseRepository } from "./base/BaseClassRepository";
import { Todo } from "../entities/todo.entity";
import { inject, injectable } from "inversify";
import { Knex } from "knex";
import { DatabaseClient } from "../services/database.service";
import { TYPES } from "../core/types.core";

@injectable()
export class TodoRepositoty extends BaseRepository<Todo> {
    public constructor(
        @inject(TYPES.DatabaseClient) private readonly databaseClient: DatabaseClient,
        // tablename: string
    ) {
        super(databaseClient);
    }

    
}
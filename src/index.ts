import {container} from "./core/container.core";
import {server} from "./core/server.core";
import {TYPES} from "./core/types.core";
import * as dotenv from 'dotenv';

dotenv.config();

// const pg = require('knex')({
//     client: 'pg',
//     connection: process.env.PG_CONNECTION_STRING,
//     searchPath: ['knex', 'public'],
//   });


function say(message: string): void {
    console.log(`I said: ${process.env.PORT}`);
  }
  say("Hello");

  server
    .build()
    .listen(() => console.log(`Listen on http://localhost:${process.env.PORT}/`));




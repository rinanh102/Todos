
const pg = require('knex')({
    client: 'pg',
    connection: process.env.PG_CONNECTION_STRING,
    searchPath: ['knex', 'public'],
  });


function say(message: string): void {
    console.log(`I said: ${message}`);
  }
  say("Hello");
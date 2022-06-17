/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('todos', function (table) {
        table.increments('id');
        table.string('content').notNullable();
    })
    .then(() =>
            knex("Todos").insert([
                {content: "AAAA"},
                {content: "BB"},
                {content: "CCC"},
                {content: "DDDD"},
            ])
        )
   
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTable("users");
};

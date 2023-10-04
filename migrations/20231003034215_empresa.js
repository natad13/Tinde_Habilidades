/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable('empresa').then((exists) => {
        if (!exists) {
            return knex.schema.createTable("empresa", function (table) {
              table.integer("id_empresa").primary();
              table.string("nombre").notNullable();
              table.string("usuario").notNullable();
              table.string("contrasena").notNullable();
              
              table.boolean("active").notNullable().defaultTo(true);
              table.timestamp("created_at").defaultTo(knex.fn.now());
            });
          }
    });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};

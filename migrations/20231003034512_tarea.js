/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable('tarea').then((exists) => {
        if (!exists) {
            return knex.schema.createTable("tarea", function (table) {
              table.increments("id_tarea").primary();
              table.float("precio_total").notNullable();
              table.float("calificacion").notNullable();
              table.float("anticipo").notNullable();
              table.boolean("estado").notNullable().defaultTo(false);
              table.string("descripcion").notNullable();
              table.integer("idpersona");
              table.foreign("idpersona").references("persona.id_persona");
              table.integer("idempresa");
              table.foreign("idempresa").references("empresa.id_empresa");

    
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

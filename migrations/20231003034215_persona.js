/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    
    return knex.schema.hasTable('persona').then((exists) => {
        if (!exists) {
            return knex.schema.createTable("persona", function (table) {
              table.integer("id_persona").primary();
              table.string("habilidades").notNullable();
              table.float("precio_hora").notNullable();
              table.string("nombre").notNullable();
              table.float("calificacion_total").notNullable();
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

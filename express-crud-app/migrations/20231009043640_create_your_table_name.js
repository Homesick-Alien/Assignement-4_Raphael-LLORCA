// migrations/xxxx_create_your_table_name.js
exports.up = function (knex) {
    return knex.schema.createTable('your_table_name', function (table) {
      table.increments('id').primary();
      table.string('column_name');
      // ... Ajoutez d'autres colonnes au besoin
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('your_table_name');
  };
  
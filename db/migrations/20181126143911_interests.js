
exports.up = function(knex, Promise) {
    return knex.schema.createTable("interests", (table) => {
      table.increments();
      table.string("interest")
      table.integer("user_id")
      .references('id')
      .inTable('users')
      .notNullable()
      .onDelete('CASCADE');
      table.timestamps(true, true);
      })
    }
    
    exports.down = function(knex, Promise) {
    return knex.schema.dropTable("interests")
    };
    

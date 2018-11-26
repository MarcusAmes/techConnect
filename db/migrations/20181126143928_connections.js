
exports.up = function(knex, Promise) {
    return knex.schema.createTable('connections', (table) => {
      table.increments();
      table.boolean('connected').defaultTo(false)
      table.integer('match_one_user_id')
      .references('id')
      .inTable('users')
      .notNullable()
      .onDelete('CASCADE');
      table.integer('match_two_user_id')
      .references('id')
      .inTable('users')
      .notNullable()
      .onDelete('CASCADE');
      table.timestamps(true, true)
      });
    }
    
    exports.down = function(knex, Promise) {
    return knex.schema.dropTable('connections')
    };
    

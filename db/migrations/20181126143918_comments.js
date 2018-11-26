
exports.up = function(knex, Promise) {
    return knex.schema.createTable("comments", (table) => {
      table.increments();
      table.string('comment')
      table.integer('sender_user_id')
      .references('id')
      .inTable('users')
      .notNullable()
      .onDelete('CASCADE');
      table.integer('receiver_user_id')
      .references('id')
      .inTable('users')
      .notNullable()
      .onDelete('CASCADE');
      table.timestamps(true, true)
      });
    }
    
    exports.down = function(knex, Promise) {
    return knex.schema.dropTable("comments")
    };
    


exports.up = function(knex, Promise) {
    return knex.schema.createTable("users", (table) => {
      table.increments();
      table.string("email");
      table.string("username");
      table.string("password");
      table.string("fname");
      table.string("lname");
      table.text("bio");
      table.integer("age");
      table.string("zipcode");
      table.text('img_url').defaultTo('https://www.bsn.eu/wp-content/uploads/2016/12/user-icon-image-placeholder.jpg')
      table.timestamps(true, true);
      })
    };

    exports.down = function(knex, Promise) {
    return knex.schema.dropTable("users")
    };

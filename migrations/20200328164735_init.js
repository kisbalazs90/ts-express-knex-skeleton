
exports.up = function(knex) {
    return knex.schema
        .createTable('users', function (table) {
            table.increments('id');
            table.string('name', 255).notNullable();
            table.string('email', 255).notNullable();
            table.string('password', 255).notNullable();
        })
        .createTable('conversations', function (table) {
            table.increments('id');
            table.string('name', 255).notNullable();
            table.json('members').notNullable();
            table.timestamp('deleted_at');
        })
        .createTable('messages', function (table) {
            table.increments('id');
            table.integer('from').notNullable();
            table.integer('conversation_id').notNullable();
            table.string('message').notNullable();
            table.timestamp('deleted_at');
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTable("users")
        .dropTable('conversations')
        .dropTable('messages');
};


exports.up = function(knex, Promise) {
    return knex.schema.alterTable('users', function (table) { // forma 1
        table.timestamp('deletedAt')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.alterTable('users', table => { // forma  2
        table.dropColumn('deletedAt')
    })
};

exports.up = function(knex) {
    return knex.schema.alterTable('SNN_LOTES', function(table) {
        table.uuid('id');
        table.boolean('deleted').defaultTo(false);
        table.timestamp('createdAt');
        table.timestamp('updatedAt');
        table.timestamp('deletedAt');
        table.integer('__v');
    });
};

exports.down = function(knex) {
    return knex.schema.alterTable('SNN_LOTES', function(table) {
        table.dropColumn('id');
        table.dropColumn('deleted');
        table.dropColumn('createdAt');
        table.dropColumn('updatedAt');
        table.dropColumn('deletedAt');
        table.dropColumn('__v');
    });
};

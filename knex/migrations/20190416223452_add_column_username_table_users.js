exports.up = (knex, Promise) => {
    return knex.schema.alterTable('users', (t) => {
        t.string('username').unique().notNull();
    });
};

exports.down = (knex, Promise) => {
    return knex.schema.table('users', (t) => {
        t.dropColumn('username');
    });
};

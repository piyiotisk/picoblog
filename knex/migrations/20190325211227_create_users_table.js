exports.up = (knex, Promise) => {
    return knex.schema.createTable('users', (t) => {
        t.increments('id').unsigned().primary();
        t.dateTime('createdAt').notNull();
        t.dateTime('updatedAt').nullable();
        t.dateTime('deletedAt').nullable();
        t.string('name').notNull();
        t.string('surname').notNull();
        t.string('email').unique().notNull();
        t.string('password').notNull();
    });
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('users');
};

exports.up = (knex, Promise) => {
    return knex.schema.createTable('posts', (t) => {
        t.increments('id').unsigned().primary();
        t.dateTime('createdAt').notNull();
        t.dateTime('updatedAt').nullable();
        t.dateTime('deletedAt').nullable();
        t.string('title').notNull();
        t.string('body').notNull();
        t.integer('user_id').unsigned();
        t.foreign('user_id').references('id').inTable('users');
    });
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('posts');
};

const bcrypt = require('bcrypt');
const knex = require('../knex/knex');

const save = async (user) => {
    const { email, name, password, surname, username } = user;

    return await knex('users')
        .insert({
            createdAt: new Date(),
            email,
            name,
            password: await hashPassword(password),
            surname,
            username
        })
        .returning('*')
        .then((res) => res)
        .catch((err) => { console.log(err); throw err });
}

const hashPassword = async (plaintextPassword) => {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(plaintextPassword, salt);
}

const getUserByUsername = (username) =>
    knex('users')
        .where({ username })
        .first()
        .catch((err) => { console.log(err); throw err });



module.exports = { getUserByUsername, save }

// const user = { name: 'jose', surname: 'armando', username: 'aaar', email: 'aa1@gmail.com', password: '12' }
// const row = save(user).then((res) => console.log(res));


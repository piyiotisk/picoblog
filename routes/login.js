const bcrypt = require('bcrypt');
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const { check, validationResult } = require('express-validator/check')


const userRepository = require('../repositories/userRepository');

/* GET login page. */
router.get('/', (req, res, next) => {
    return res.render('login', { title: 'PicoBlog' });
});

/* Options route used for preflight request to the login POST route (cors) */
router.options("/*", (req, res, next) => {
    res.header('access-control-allow-origin', '*');
    res.header('access-control-allow-methods', 'POST');
    res.header('access-control-allow-headers', ' Accept, access-control-allow-origin, Content-Type');
    res.sendStatus(204);
});

const validationRules = [
    check('password').isLength({ min: 6 }),
    check('username').isAlphanumeric(),
]

/* POST login page. */
router.post('/', validationRules, async (req, res, next) => {
    console.log(req.body);
    console.log((validationResult(req).array()));
    res.header('access-control-allow-origin', '*');
    const user = await userRepository.getUserByUsername(req.body.username);
    console.log(user)

    const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
    if (isPasswordCorrect) {
        const token = jwt.sign({ user }, 'secretKey');
        return res.send(JSON.stringify({ authorization: token }));
    }
    return res.sendStatus(500);;
});

module.exports = router;

const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check')

const userRepository = require('../repositories/userRepository');

/* GET signup page. */
router.get('/', (req, res, next) => {
    return res.render('signup', { title: 'PicoBlog' });
});

const validationRules = [
    check('email').isEmail(),
    check('password').isLength({ min: 6 }),
    check('username').isAlphanumeric(),
]

/* POST signup page. */
router.post('/', validationRules, async (req, res, next) => {
    console.log(req.body)
    console.log((validationResult(req).array()))

    if (validationResult(req).array().length !== 0) {
        return res.status(500);
    }

    await userRepository.save(req.body);
    return res.render('signup', { title: 'PicoBlog' });;
});

module.exports = router;

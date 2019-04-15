const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check')

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
router.post('/', validationRules, (req, res, next) => {
    console.log(req.body)
    console.log((validationResult(req).array()))
    return res.render('signup', { title: 'PicoBlog' });;
});

module.exports = router;

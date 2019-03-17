const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check')

/* GET login page. */
router.get('/', (req, res, next) => {
    return res.render('login', { title: 'PicoBlog' });
});

const validationRules = [
    check('password').isLength({ min: 6 }),
    check('email').isEmail(),
]

/* POST login page. */
router.post('/', validationRules, (req, res, next) => {
    console.log(req.body)
    console.log((validationResult(req).array()))
    return res.render('login', { title: 'PicoBlog' });;
});

module.exports = router;

const express = require('express');
const router = express.Router();

user = {
    username: 'conpiy'
}

posts = [
    {
        'author': { 'username': 'alex' },
        'content': `The PicoCoder's Node.js tutorial is cool.`
    },
    {
        'author': { 'username': 'joanna' },
        'content': 'I love javascript!'
    }
]

/* GET home page. */
router.get('/', (req, res, next) =>
    res.render('index', { title: 'PicoBlog', username: user.username, posts }));

module.exports = router;

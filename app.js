const express = require('express');
const hbs = require('hbs');
const app = express();

// view engine setup
app.set('view engine', 'hbs');

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

hbs.registerPartials(__dirname + '/views/partials');

app.get('/', (req, res) => res.render('index', { title: 'PicoBlog', username: user.username, posts }));

const port = 3000;
app.listen(port, () => console.log(`Server listening at: ${port}!`));
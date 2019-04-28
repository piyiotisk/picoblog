const bodyParser = require('body-parser')
const express = require('express');
const hbs = require('hbs');
const app = express();
var path = require('path');
const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');
const signupRouter = require('./routes/signup');
// view engine setup
app.set('view engine', 'hbs');
// Set handlebars partials folder
hbs.registerPartials(__dirname + '/views/partials');

// Middleware
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static(path.join(__dirname, 'public')))

// Routes
app.use('/login', loginRouter);
app.use('/signup', signupRouter);
app.use('/', indexRouter);

const port = 3000;
app.listen(port, () => console.log(`Server listening at: ${port}!`));
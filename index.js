const express = require('express');
const pug = require('pug');
const routes = require('./routes/routes');
const path = require('path');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');

const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));

app.use(expressSession({
    secret: 'wh4t3v3r',
    saveUninitialized: true,
    resave: true
}));

let urlencodedParser = express.urlencoded({
    extended: false
});

const checkAuth = (req, res, next) =>{
    if(req.session.user && req.session.user.isAuthenticated) {
        next();
    } else{
        res.redirect('/')
    }
}

app.get('/', routes.index);
app.post('/', urlencodedParser, routes.indexLogIn);
app.get('/private', checkAuth, routes.private);
app.get('/logout', routes.logout);
app.get('/create', routes.create);
app.post('/create', urlencodedParser, routes.createAccount);
app.get('/edit/:id', routes.edit);
app.post('/edit/:id', urlencodedParser, routes.editAccount);

app.listen(3000);
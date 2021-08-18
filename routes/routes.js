const { response } = require('express');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://lcontreras:neumont123@cluster0.jc58z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

let mdb = mongoose.connection;
mdb.on('error', console.error.bind(console, 'connection error'));
mdb.once('open', callback => {});

let accountSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    age: String,
    element: String,
    pokemongen: String,
    systemtoplay: String
});

let Account = mongoose.model('Account_Collection', accountSchema);



exports.index = (req, res) => {
    res.render('index')
};

exports.indexLogIn = (req, res) =>{
    console.log(req.body.username);
    if(req.body.username == 'user' && req.body.password == 'pass'){
        req.session.user = {
            isAuthenticated: true,
            username: req.body.username
        }
        res.redirect('/private');
    } else {
        res.redirect('/public');
    }
};

exports.logout = (req, res) => {
    req.session.destroy(err =>{
        if(err){
            console.log(err);
        }else{
            res.redirect('/');
        }
    });
};

exports.private = (req, res) =>{
    res.send(`Authorized access: Welcome ${req.session.user.username}!`);
};

exports.create = (req, res) => {
    res.render('create', {
        title: 'Create Account'
    })
}

exports.createAccount = (req, res) => {
    let account = new Account({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        age: req.body.age,
        element: req.body.element,
        pokemongen: req.body.pokemongen,
        systemtoplay: req.body.systemtoplay
    });
    account.save((err, account) =>{
        if(err) return console.error(err);
        console.log(req.body.username + ' added');
    });
    res.redirect('/');
};
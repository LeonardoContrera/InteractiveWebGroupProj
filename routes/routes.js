const { response, text } = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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
    let today = new Date;
    let visited = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + " "+ today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    res.cookie('visited', visited, {maxAge: 999999999999999999999});

    if(req.cookies.beenToSiteBefore == 'yes') {
        text2 = `You were here last on ${req.cookies.visited}`;
    }
    else{
        res.cookie('beenToSiteBefore', 'yes' ,{maxAge: 999999999999999999999});
        text2 = "This is your first time before";
    }
    res.render('index', {
        title: text2
    })
};

exports.indexLogIn = (req, res) =>{
    console.log(req.body.username);

    Account.findOne({'username' : req.body.username}, function(err, account) {
        if(err) return console.error(err);
        if(account)
        {
            var validatePassword = bcrypt.compareSync(req.body.password, account.password);
            if(validatePassword)
            {
                req.session.user = {
                    isAuthenticated: true,
                    username: req.body.username
                }
                res.redirect('/private');
            } else {
                console.log('Invalid password');
                res.redirect('/');
            }
        } else{
            console.log('Invalid username');
            res.redirect('/');
        }
    });
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
    //res.send(`Authorized access: Welcome ${req.session.user.username}!`);
    let logText = `Authorized access: Welcome ${req.session.user.username}!`;



    Account.find({ 'username': req.session.user.username }, (err, account) =>{
        if(err) return console.error(err);
        res.render('private', {
            title: logText,
            accounts: account
        });
    });
};

exports.create = (req, res) => {
    res.render('create', {
        title: 'Create Account'
    })
}

exports.createAccount = (req, res) => {
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(req.body.password, salt);
    let tempPassword = hash;
    let account = new Account({
        username: req.body.username,
        password: tempPassword,
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


exports.edit = (req, res) =>{
    Account.findById(req.params.id, (err, account) =>{
        if(err) return console.error(err);
        res.render('edit', {
            title: 'Edit Account',
            account
        });
    });
};

exports.editAccount = (req, res) => {
    Account.findById(req.params.id, (err, account) =>{
        if(err) return console.error(err);
        account.email = req.body.email;
        account.age = req.body.age;
        account.element = req.body.element;
        account.pokemongen = req.body.pokemongen;
        account.systemtoplay = req.body.systemtoplay;
        account.save((err, account) => {
            if(err) return console.error(err);
            console.log(account.username) + ' updated'
        });
        res.redirect('/private')
    });
};
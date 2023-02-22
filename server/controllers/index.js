let express = require('express');
const passport = require('passport');
let router = express.Router();

// create the userModel instance
let UserModel = require('../models/user');
let User = UserModel.User;

/* GET home page. */
module.exports.displayHomePage = (req, res, next) => {
    res.render('index', { title: 'Hi, I am Cyrus, a software developer. This website is a small portfolio of mine. :)', slug: 'home', displayName: req.user?req.user.displayName:"" });
}

module.exports.displayAboutPage = (req, res, next) => {
    res.render('index', { title: 'About', slug: 'about', displayName: req.user?req.user.displayName:"" });
}

module.exports.displayServicesPage = (req, res, nex) => {
    res.render('index', { title: 'Services', slug: 'services', displayName: req.user?req.user.displayName:"" });
}

module.exports.displayProductsPage = (req, res, next) => {
    res.render('index', { title: 'Products', slug: 'products', displayName: req.user?req.user.displayName:"" });
}

module.exports.displayContactPage = (req, res, next) => {
    res.render('index', { title: 'Contact', slug: 'contact', displayName: req.user?req.user.displayName:"" });
}

// Login
module.exports.displayLoginPage = (req, res, next) => {
    // check if the user already login
    if (!req.user)
    {
        res.render('auth/index', 
            {
                title: "Login",
                message: req.flash('loginMessage'),
                displayName: req.user?req.user.displayName:"",
                slug: 'login'
            }
        );
    } else {
        return res.redirect('/');
    }
}

module.exports.processLoginPage = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        // server err
        if (err) {
            return next(err);
        }
        // check if there is a user login error
        if (!user) {
            req.flash('loginMessage', "Authenticate error");
            return res.redirect('/login');
        }
        req.login(user, (err) => {
            //server error?
            if (err) {
                return next(err);
            }
            return res.redirect('/business_contacts');
        });
    })(req, res, next);
}

// Register
module.exports.displayRegisterPage = (req, res, next) => {
    // chekc if the user is not already login
    if (!req.user) {
        res.render('auth/index', 
            {
                title: 'Register',
                message: req.flash('registerMessage'),
                displayName: req.user?req.user.displayName:'',
                slug: 'register'
            }
        );
    } else {
        return res.redirect('/');
    }
}

module.exports.processRegisterPage = (req, res, next) => {
    // initialize a user object
    let newUser = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        displayName: req.body.displayName,
    });
    User.register(newUser, req.body.password, (err) => {
        if (err) {
            console.log("Error: inserting new user");
            if (err.name == "UserExists Error") {
                req.flash(
                    'registerMessage',
                    'Registration Error: user already existed!'
                );
                console.log("Error: user already existed!");
            }
            return res.render('auth/index', 
                {
                    title: 'Register',
                    message: req.flash('registerMessage'),
                    displayName: req.user? req.user.displayName:"",
                    slug: 'register'
                }
            );
        } else {
            return passport.authenticate('local')(req, res, () => {
                res.redirect('/business_contacts');
            });
        }
    });
}

// Logout
module.exports.performLogout = (req, res, next) => {
    req.logout(function(err) {
        if (err) {
            return next(err);
        } else {
            res.redirect('/');
        }
    });
}
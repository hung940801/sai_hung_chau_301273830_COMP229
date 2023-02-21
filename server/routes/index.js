let express = require('express');
let router = express.Router();
let indexController = require('../controllers/index');

/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hi, I am Cyrus, a software developer. This website is a small portfolio of mine. :)', slug: 'home' });
});
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Hi, I am Cyrus, a software developer. This website is a small portfolio of mine. :)', slug: 'home' });
});
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About', slug: 'about' });
});
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services', slug: 'services' });
});
router.get('/products', function(req, res, next) {
  res.render('index', { title: 'Products', slug: 'products' });
});
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact', slug: 'contact' });
});
*/

router.get('/', indexController.displayHomePage);
router.get('/home', indexController.displayHomePage);
router.get('/about', indexController.displayAboutPage);
router.get('/services', indexController.displayServicesPage);
router.get('/products', indexController.displayProductsPage);
router.get('/contact', indexController.displayContactPage);

// GET router for display login page
router.get('/login', indexController.displayLoginPage);

// POST router for processing login page
router.post('/login', indexController.processLoginPage);

// GET router for display the register page
router.get('/register', indexController.displayRegisterPage);

// POST router for processing the register page
router.post('/register', indexController.processRegisterPage);

// GET to perform userLogout
router.get('/logout', indexController.performLogout);

module.exports = router;

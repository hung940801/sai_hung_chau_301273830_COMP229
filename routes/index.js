var express = require('express');
var router = express.Router();

/* GET home page. */
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

module.exports = router;

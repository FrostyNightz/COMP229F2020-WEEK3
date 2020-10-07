let express = require('express');
let router = express.Router();

/* Home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* Home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* About page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About'});
});

/* Product page. */
router.get('/products', function(req, res, next) {
  res.render('index', { title: 'Product'});
});

/* Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services'});
});

/* Contact us page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact'});
});

module.exports = router;

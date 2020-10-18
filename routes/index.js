var express = require('express');
var router = express.Router();

/* Accueil. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Alhidayah' });
});
/* Nous contacter */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});
/* A propos de nous */
router.get('/apropos', function(req, res, next) {
  res.render('apropos', { title: 'A Propos de nous' });
});

module.exports = router;

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
/* Get academie de l'islam pour enfants page*/
router.get('/programmeenfants', function(req, res, next) {
  res.render('programmeenfants', { title: 'Programme Enfants' });
});
/* Get academie de l'islam pour adultes page*/
router.get('/programmeadultes', function(req, res, next) {
  res.render('programmeadultes', { title: 'Programme Adultes' });
});
/* Get la caravane de l'islam page*/
router.get('/caravane-de-l-islam', function(req, res, next) {
  res.render('caravane-de-l-islam', { title: "Caravane de l'islam" });
});
/* Get le club de lecture page*/
router.get('/club-de-lecture', function(req, res, next) {
  res.render('club-de-lecture', { title: "Club de lecture" });
});
/* Get Éclaireuses page*/
router.get('/eclaireuses', function(req, res, next) {
  res.render('eclaireuses', { title: "Éclaireuses" });
});
/* Get Gallerie page*/
router.get('/la-gallerie-images', function(req, res, next) {
  res.render('la-gallerie-images', { title: "Gallerie" });
});

module.exports = router;

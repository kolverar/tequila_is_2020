var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'index' });
});

//get para obtener opciones de buscar
router.get('/buscar/', (req, res, next) => {
  res.render('tequilaGet',{nombre:'vacio'})
});
//get para obtner funcion registrar
router.get('/registro/', (req, res, next) => {
  res.render('tequilaPost',{nombre:'vacio'})
});

module.exports = router;

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Tequila = require('../models/tequila');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("index")
});

//get para obtener opciones de buscar
router.get('/buscar/', (req, res, next) => {
  res.render('tequilaGet',{nombre:'vacio'})
});
//get para obtner funcion registrar
router.get('/registro/', (req, res, next) => {
  res.render('tequilaPost',{nombre:'vacio'})
});
//get para obtener todos los registros
router.get('/tequila/', (req, res, next) => {
    Tequila.find({}, (err, data) => {
        if(err)
            res.status(500).render('error404',{error:'404'})
        if(data)
            console.log(data)
            res.status(200).json(data)
    });
});

//metodo get para buscar por nombre desde url
router.get('/tequila/:nombreT',(req, res, next) =>{
  Tequila.findOne(
    {'nombre':req.params.nombreT},
    (err,datos)=>{
      if(datos==null){
        res.status(404).render('error404',{error:'404'})
      }else{
        res.status(200).json(datos);
      }
    }
  );
  });
  router.get('/tequila/:precioT',(req, res, next) =>{
    Tequila.findOne(
      {'precio':req.params.precioT},
      (err,datos)=>{
        if(datos==null){
          res.status(404).render('error404',{error:'404'})
        }else{
          res.status(200).json(datos);
        }
      }
    );
    });
    //metodo post para obtener datos del la opcion buscar por nombre desde formulario
    router.post('/buscar/', (req, res, next) => {
      if(req.body.botonNom=='1'){
        Tequila.findOne(
          {'nombre':{$regex:req.body.pstNom,$options:"$i"}}, // expresion regular para buscar coincidencias y no distinguier minusculas ni mayusculas
          (err,datos)=>{
            if(datos==null){
              res.status(404).render('error404',{error:'404'})
            }else{
              res.status(200).json(datos);
            }
          }
        );
      }else {
        //metodo post para obtener datos del la opcion buscar por precio desde formulario
        Tequila.findOne(
          {'precio':req.body.pstPrec},
          (err,datos)=>{
            if(datos==null){
              res.status(404).render('error404',{error:'404'})
            }else{
              res.status(200).json(datos);
            }
          }
        );
      }
    });

  router.post('/registro',(req,res,next)=>{
    var tequila = Tequila(
      {
        id:req.body.id,
        nombre:req.body.nombre,
        empresa:req.body.empresa,
        tipoAgave:req.body.tipoAgave,
        porcentajeAlcohol:req.body.porcentajeAlcohol,
        estadoOrigen:req.body.estadoOrigen,
        precio:req.body.precio,
        imagen:req.body.imagen
      }
    );
    tequila.save((err,datos)=>{
      if(err){
        res.status(404).json({
          mensaje:"Error al guardar"
        });
      }else{
        res.status(201).json(datos);
      }
    });
  });


module.exports = router;

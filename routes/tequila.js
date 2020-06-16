const express = require('express');
const router = express.Router();

let Tequila = require('../models/tequila')

//get para obtener opciones de buscar
router.get('/get/', (req, res, next) => {
  res.render('tequilaGet',{nombre:'kaskksa'})
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
  router.post('/tequila/', (req, res, next) => {
    if(req.body.botonNom=='1'){
      Tequila.findOne(
        {'nombre':req.body.pstNom},
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

module.exports = router;

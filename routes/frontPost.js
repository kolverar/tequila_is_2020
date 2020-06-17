var express = require('express');
var router = express.Router();
var request = require('request');
var Tequila = require('../models/tequila');


router.get('/', (req, res, next) => {
  res.render('post')
});

router.post('/',(req,res,next)=>{
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
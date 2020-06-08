var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Tequila = require('../models/tequila');


router.post('/tequila',(req,res,next)=>{
  var tequila = Tequila(
    {
      id:req.body.id,
      nombre:req.body.nombre,
      empresa:req.body.empresa,
      tipoAgave:req.body.tipoAgave,
      porcentajeAlcohol:req.body.porcentajeAlcohol,
      estadoOrigen:req.body.estadoOrigen,
      precio:req.body.precio
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

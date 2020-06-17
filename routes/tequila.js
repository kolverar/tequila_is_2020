var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Tequila = require('../models/tequila');

router.get('/tequila/',(req,res,netxt)=>{
  Tequila.find({},(err,datos)=>{
    if(err) res.status(500).json({error:"No existe!"});
    if(datos) res.status(200).json(datos);
  });
});

router.get('/tequila/:idTequila',(req,res,next)=>{
  Tequila.findOne({'id' : req.params.idTequila},(err,datos)=>{
      if( datos == null){
          res.status(404).json({mensaje:"No existe!"});
        }else{
          res.status(200).json(datos);
        }
    });
});


router.delete('/tequila',(req,res,next)=>{
  
  res.status(405).json({mensaje:"No permitido"});
});

router.delete('/tequila/:idTequila' , (req,res,next)=>{

  Tequila.findOneAndDelete({id: req.params.idTequila} , (err, datos)=>{
    if(err){
        res.status(404).json({mensaje:"No se ha encontrado el producto"});
      }else
  if(datos){

      res.status(200).json({mensaje: "Se ha eliminado el producto"})
      }
  });
});


router.patch('/tequila/:tequilaID', (request, responsive, next)=>{

  Tequila.findOneAndUpdate({id : request.params.tequilaID},{
    id : request.body.id,
    nombre : request.body.nombre,
    empresa : request.body.empresa,
    tipoAgave : request.body.tipoAgave,
    porcentajeAlcohol : request.body.porcentajeAlcohol,
    estadoOrigen : request.body.estadoOrigen,
    precio : request.body.precio
  },function(error,datos){
      if (error) {
          responsive.status(404).json({mensaje:"Error al guardar"});
      }else{
        responsive.status(201).json(datos);
      }
    });
});


<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> 03b6ab2a9c74037366645da28f2548d97dc92d9c

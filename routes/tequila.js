var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Tequila = require('../models/tequila');

confirmar = new Boolean;

router.delete('/tequila',(req,res,next)=>{
  res.status(405).json({mensaje:"No permitido"});
});

router.delete('/tequila/:idTequila' , (req,res,next)=>{
  Tequila.findOneAndDelete({id: req.params.idTequila} , (err, datos)=>{
    if(err){
        res.status(404).json({mensaje:"No se ha eliminado el producto"});
      }else{
        res.status(200).json({mensaje:"Se ha eliminado el producto"});
      }
  });
});

module.exports = router;
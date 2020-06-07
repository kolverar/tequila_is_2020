var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Tequila = require('../models/tequila');


router.delete('/tequila:idTequila' , (req,res,next)=>{
  Marvel.findOneAndDelete({id: req.params.idComic} , (datos, conf)=>{
    if( datos == null || confirmar == false){
        res.status(404).json({mensaje:"Acción candelada"});
      }else{
        res.status(200).json(datos);
      }
  });
});

module.exports = router;
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Tequila = require('../models/tequila');

router.get('/tequila/:tequilaID',(req,res,next)=>{
	Tequila.findOne({'id' : req.params.tequilaID},(err,datos)=>{
    	if( datos == null){
        	res.status(404).json({mensaje:"No existe!"});
      	}else{
        	res.status(200).json(datos);
      	}
    });
});

router.post('/tequila',(req,res,next)=>{
  	var marca = Tequila({
      	id : 1,
		nombre : "Caballito",
		empresa : "Bacardi",
		tipoAgave : "uno bien chido",
		porcentajeAlcohol : 50,
		estadoOrigen : "EEUU",
		precio : 1000
    });
  	marca.save((err,datos)=>{
    	if(err){
      		res.status(404).json({mensaje:"Error al guardar"});
    	}else{
      		res.status(201).json(datos);
      	}
  	});
});

router.patch('/tequila/:tequilaID', (request, responsive, next)=>{
	Tequila.findOneAndUpdate({id : 'tequilaID'},{
		id : 1,
		nombre : "Caballito",
		empresa : "Bacardi",
		tipoAgave : "uno bien chido",
		porcentajeAlcohol : 50,
		estadoOrigen : "EEUU",
		precio : 1000
	},function(error,datos){
    	if (error) {
      		responsive.status(404).json({mensaje:"Error al guardar"});
    	}else{    
    		responsive.status(201).json(datos);
    	}
  	});
});

module.exports = router;
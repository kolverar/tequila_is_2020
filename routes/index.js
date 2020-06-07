var express = require('express');
var router = express.Router();
var Tequila = require('../models/tequila');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tequila' });
});

router.patch('/tequila/:id', (request, responsive, next)=>{
	Tequila.findOne({'id': request.params.ID}, (error, datos)=>{
		if(datos == null){
			responsive.status(404).json({mensaje:"No hay registro de tal ID"});
		}else{//Modifica
			var tequila = Tequila({
				id : request.body.id
				nombre : request.body.nombre,
				empresa : request.body.empresa,
				tipoAgave : request.body.tipoAgave,
				porcentajeAlcohol : request.body.porcentajeAlcohol,
				estadoOrigen : request.body.estadoOrigen,
				precio : request.body.precio
			});
			tequila.patch((error, datos)=>{
				if(error){
      				responsive.status(404).json({mensaje:"Error al guardar"});
    			}else{
      				responsive.status(201).json(datos);
    			}
			});
		}
	});
});

router.post('/tequila', (request, responsive, next)=>{
	var tequila = Tequila({
    	id: Number,
    	nombre: String,
    	empresa: String,
    	tipoAgave: String,
    	porcentajeAlcohol: Number,
    	estadoOrigen: String,
    	precio: Number
	});
	tequila.save((error, datos)=>{
		if(error){
			responsive.status(404).json({mensaje:"Eror inesperado al guardar..."});
		}else{
			responsive.status(201).json(datos);
		}
	});
});

module.exports = router;
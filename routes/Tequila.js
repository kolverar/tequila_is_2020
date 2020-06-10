var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Tequila = require('../models/tequila');

router.get('/tequila/:tequilaID',(req,res,next)=>{ //Uno
	Tequila.findOne({'id' : req.params.tequilaID},(err,datos)=>{
    	if( datos == null){
        	res.status(404).json({mensaje:"No existe!"});
      	}else{
        	res.status(200).json(datos);
      	}
    });
});

router.get('/tequila/', (req, res, next) => { //Todos
    Tequila.find({}, (err, data) => {
        if(err) res.status(500).json({error: "Error!"})
        if(data) console.log(data) 
          res.status(200).json(data)
    });
});
/*  Ejemplo de Tequila para hacer pruebas
    id : 1,
    nombre : "Caballito",
    empresa : "Bacardi",
    tipoAgave : "uno bien chido",
    porcentajeAlcohol : 50,
    estadoOrigen : "EEUU",
    precio : 1000
*/
router.post('/tequila',(req,res,next)=>{//Insertar
  	var marca = Tequila({
    id : request.params.id,
    nombre : request.params.nombre,
    empresa : request.params.empresa,
    tipoAgave : request.params.tipoAgave,
    porcentajeAlcohol : request.params.porcentajeAlcohol,
    estadoOrigen : request.params.estadoOrigen,
    precio : request.params.precio
    });
  	marca.save((err,datos)=>{
    	if(err){
      		res.status(404).json({mensaje:"Error al guardar"});
    	}else{
      		res.status(201).json(datos);
      	}
  	});
});

router.patch('/tequila/:tequilaID', (request, responsive, next)=>{//Actualizar
	Tequila.findOneAndUpdate({id : request.params.tequilaID},{
    id : request.params.id,
    nombre : request.params.nombre,
    empresa : request.params.empresa,
    tipoAgave : request.params.tipoAgave,
    porcentajeAlcohol : request.params.porcentajeAlcohol,
    estadoOrigen : request.params.estadoOrigen,
    precio : request.params.precio
	},function(error,datos){
    	if (error) {
      		responsive.status(404).json({mensaje:"Error al guardar"});
    	}else{    
    		responsive.status(201).json(datos);
    	}
  	});
});

router.delete('/tequila/:idTequila' , (req,res,next)=>{//Borrar
  Tequila.findOneAndDelete({id: req.params.idTequila} , (err, datos)=>{
    if(datos==null){
        res.status(404).json({mensaje:"No se ha encontrado el producto"});
    }else{
          res.status(200).json({mensaje:"Se ha eliminado el producto..."+datos});
    }
  });
});

module.exports = router;
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




router.delete('/tequila',(req,res,next)=>{
  res.status(405).json({mensaje:"No permitido"});
});

router.delete('/tequila/:idTequila' , (req,res,next)=>{
  Tequila.findOneAndDelete({id: req.params.idTequila} , (err, datos)=>{
    if(err){
        res.status(404).json({mensaje:"No se ha encontrado el producto"});
      }else{

      	var confirmar = confirm("¿Desea eliminar este elemento?");

      	if (confirmar==true) {
        	res.status(200).json({mensaje:"Se ha eliminado el producto"});
    	}else{
    		res.status(405).json({mensaje:"Acción cancelada"});
    	 }
      }
  });
});


router.patch('/tequila/:idTequila', (req, res, next)=>{
	Tequila.findOneAndUpdate({id : req.params.idTequila}, (err, datos)=>
	{
		id :req.body.id,
		nombre:req.body.nombre,
		empresa:req.body.empresa,
		tipoAgave:req.body.tipoAgave,
		porcentajeAlcohol:req.body.porcentajeAlcohol,
		estadoOrigen:req.body.estadoOrigen,
		precio:req.body.precio,
	},function(error,datos){
    	if (error) {
      		responsive.status(404).json({mensaje:"Error al guardar"});
    	}else{
    		responsive.status(204).json(datos);
    	}
  	});
});

module.exports = router;

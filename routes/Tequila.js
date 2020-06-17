//Ruta de app.use: localhost:3000/Home/Tequila
var express = require('express');
var router = express.Router();
var Tequila = require('../models/tequila');

router.get('/:tequilaID',(request,responsive,next)=>{ //Uno
	Tequila.findOne({'id' : request.params.tequilaID},(error,datos)=>{
    	if( datos == null){
        	responsive.status(404).json({mensaje:"No existe!"});
      	}else{
        	responsive.status(200).json(datos);
      	}
    });
});

router.get('/', (request, responsive, next) => { //Todos
    Tequila.find({}, (error, datos) => {
        if( datos == null){
          responsive.status(404).json({mensaje:"Inventario vacio!!"});
        }else{
          responsive.status(200).json(datos);
        }
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
router.post('/',(request,responsive,next)=>{//Insertar
  	var tequila = Tequila({
    id : request.body.id,
    nombre : request.body.nombre,
    empresa : request.body.empresa,
    tipoAgave : request.body.tipoAgave,
    porcentajeAlcohol : request.body.porcentajeAlcohol,
    estadoOrigen : request.body.estadoOrigen,
    precio : request.body.precio,
    ml: request.body.ml,
    imagen: request.body.imagen
    });
  	tequila.save((err,datos)=>{
    	if(err){
      		res.status(404).json({mensaje:"Error al guardar"});
    	}else{
      		res.status(201).json(datos);
      	}
  	});
});

router.patch('/:tequilaID', (request, responsive, next)=>{//Actualizar
	Tequila.findOneAndUpdate({id : request.params.tequilaID},{
    id : request.body.id,
    nombre : request.body.nombre,
    empresa : request.body.empresa,
    tipoAgave : request.body.tipoAgave,
    porcentajeAlcohol : request.body.porcentajeAlcohol,
    estadoOrigen : request.body.estadoOrigen,
    precio : request.body.precio,
    ml: request.body.ml,
    imagen: request.body.imagen
	},function(error,datos){
    	if (error) {
      		responsive.status(404).json({mensaje:"Error al guardar"});
    	}else{    
    		responsive.status(201).json(datos);
    	}
  	});
});

router.delete('/:idTequila' , (requestq,responsive,next)=>{//Borrar
  Tequila.findOneAndDelete({id: request.params.idTequila} , (error, datos)=>{
    if(datos==null){
        responsive.status(404).json({mensaje:"No se ha encontrado el producto"});
    }else{
          responsive.status(200).json({mensaje:"Se ha eliminado el producto..."+ datos});
    }
  });
});

module.exports = router;
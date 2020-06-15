const express = require('express');
const router = express.Router();




let Tequila = require('../models/tequila')

router.get('/tequila/', (req, res, next) => {
  res.render('tequilaGet',{nombre:'kaskksa'})
});
//metodo get para buscar por nombre desde url
router.get('/tequila/:nombreT',(req, res, next) =>{
  Tequila.findOne(
    {'nombre':req.params.nombreT},
    (err,datos)=>{
      if(datos==null){
        res.status(404).json({error:"Not Found"});
      }else{
        res.status(200).json(datos);
      }
    }
  );
  });
  //metodo post para obtener datos del la opcion buscar por nombre desde formulario
  router.post('/tequila/', (req, res, next) => {
    Tequila.findOne(
      {'nombre':req.body.prueba},
      (err,datos)=>{
        if(datos==null){
          res.status(404).json({error:"Not Found"});
        }else{
          res.status(200).json(datos);
        }
      }
    );
  });

module.exports = router;

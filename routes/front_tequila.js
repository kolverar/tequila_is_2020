var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/tequilasLista', (req,res,next)=>{
  request.get('http://localhost:3000/tequila/api/tequila',(err,response,body)=>{
    if(err) res.status(404).json({mensaje: "Error al consumir get tequila"});
    else res.render('tequila_view', {'datos': JSON.parse(body)});
  });
});

module.exports = router;

var express = require('express');
var router = express.Router();
var request = require('request');

// consumir http://localhost:3000/marvel/api/comic
router.get('/',(req,res,next)=>{
  request.get('http://localhost:3000/front/tequila/tequila',(err,response,body)=>{
    if(err) res.status(404).json({mensaje:"Error"});
    else res.render('index', {'datos': JSON.parse(body) });
  });
});

module.exports = router;

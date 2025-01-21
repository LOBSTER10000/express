const express = require('express');
let router = express.Router();



router.get('/', function(req,res, next){
        res.render('html/board.ejs', {result : '안녕하세요'});
});
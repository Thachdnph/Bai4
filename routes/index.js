var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var year = 2022;
  var sinhviens = ['Alex','Tom','Marry','Peter','Ana','Jonny','Paul']

  res.render('index', { title: 'Express' ,
  nam : year,
  students : sinhviens});
});

router.get('/come',function (req,res,next){
  res.render('come');

});

module.exports = router;

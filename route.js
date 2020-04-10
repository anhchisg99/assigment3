var express = require('express');
var router = express.Router();

var cats = {rumor:"phi tieu sac lem",skin:"katarina sieu pham"};
router.get('/champ',function(req,res){

   res.send(cats);
});


module.exports = router;

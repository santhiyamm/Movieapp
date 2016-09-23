var express = require('express');
var router = express.Router();

/* GET users listing. */

router.post('/userinsert/:userid/:password',function(req,res)
{
  var user =new users();
  user.username=req.params.userid;
  user.password=req.params.password;
  user.save(function(err){
    if(err)
    {
      res.send(err);
    }
    else {
      {
        res.send("User Created");
      }
    }
  });
});

module.exports = router;

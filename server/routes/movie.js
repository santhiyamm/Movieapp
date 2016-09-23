
var express =require('express');
var app=express.Router();
var favmovie=require('../model/movie');

app.get('/moviedisplay',function(req,res,next)
{
  //console.log('req body'+JSON.stringify(req.body));

  favmovie.find({},function(err,docs){
    res.json(docs);

  });
});


app.post('/favmovie',function(req,res)
{

  var fmovie =new favmovie();
  fmovie.Title=req.body.Title;
  fmovie.Year=req.body.Year;
  fmovie.Type=req.body.Type;
  fmovie.imdbID=req.body.imdbID;
  fmovie.Poster=req.body.Poster;

  fmovie.save(function(err){
    if(err)
    {
      res.send(err);
    }
    else {
        res.send("Added to favourite List");
      }

  });
});



// updating the user
app.put('/update',function(req,res,next){
console.log(req.body);
  favmovie.findOneAndUpdate({imdbID: req.body.imdbID }, { Title: req.body.t },
    function(err, user) {
     if (err){ res.send(err);
     }
     else
       {
         res.send("Movie updated");
       }

   });
});

// deleting the users
app.delete('/delete',function(req,res){

 favmovie.findOneAndRemove({ Year: req.body.Year }, function(err) {
   if (err){
   res.send(err);
 }
else{
   res.send('Movie deleted!');
 }
});
});
module.exports=app;

var mongoose=require("mongoose");
var Schema=mongoose.Schema;

var movies=new Schema({
    Title:String,
    Year:String,
    Poster:String,
    Type:String,
    imdbID:String,

});
module.exports=mongoose.model('movies',movies);

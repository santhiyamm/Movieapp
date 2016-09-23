var mongoose=require("mongoose");
var Schema=mongoose.Schema;

var collections=new Schema({
    username:String,
    password:String
});
module.exports=mongoose.model('collections',collections);

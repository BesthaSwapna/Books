const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BoksSchema= new Schema({
  bookName:{type:String},
  cost:{type:Number},
  author:{type:String}
});

const User=module.exports=mongoose.model('bookModel',BoksSchema);
module.exports.create=(req,res)=>{
  
}
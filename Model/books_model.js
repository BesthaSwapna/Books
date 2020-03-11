const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BoksSchema= new Schema({
  bookName:{type:String},
  cost:{type:Number},
  author:{type:String}
});

const Books=module.exports=mongoose.model('bookModel',BoksSchema);
module.exports.create = async product => {
  const res = await product.save();
  console.log(res)
  return res;
};
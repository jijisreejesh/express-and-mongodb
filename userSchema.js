const mongoose=require('mongoose');

const data={
    name:{type:String},
    age:{type:Number}
}

const userModel=mongoose.model("user",data)
module.exports=userModel;
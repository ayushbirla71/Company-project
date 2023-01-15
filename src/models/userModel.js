
const mongoose =require('mongoose')

const UserSchema= new mongoose.Schema({
    name:{type:String,required:true},
    Email:{type:String,required:true},
    password:{type:String,required:true},
    type:{
        type:String,
        default:"Student",
        enum:['Student','Admin']
    }
})

module.exports=mongoose.model("User",UserSchema)
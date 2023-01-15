
const mongoose =require('mongoose')

const UserSchema= new mongoose.Schema({
    name:String,
    Email:String,
    password:String,
    type:{
        type:String,
        default:"Student",
        enum:['Student','Admin']
    }
})

module.exports=mongoose.model("User",UserSchema)
const mongoose =require('mongoose')

const QesSchema= new mongoose.Schema({
    Qestion:String,
    img:String,
    option_A:String,
    option_B:String,
    option_C:String,
    option_D:String,
    subject:String,
    answer:String
})

module.exports=mongoose.model("Questions",QesSchema)
const mongoose =require('mongoose')

const QesSchema= new mongoose.Schema({
    Qestion:{type:String,required:true},
    img:String,
    option_A:{type:String,required:true},
    option_B:{type:String,required:true},
    option_C:{type:String,required:true},
    option_D:{type:String,required:true},
    subject:{type:String,required:true},
    answer:{type:String,required:true}
})

module.exports=mongoose.model("Questions",QesSchema)
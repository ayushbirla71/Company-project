const { default: mongoose } = require("mongoose")

const userSchima= new mongoose.Schema({
    name:String,
    password:String

})

module.exports=mongoose.model("User",userSchima)
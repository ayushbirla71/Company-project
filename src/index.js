const express=require('express')
const mongoose=require('mongoose')
const route=require("./routes/route")
const app=express()

app.use(express.json())

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))

mongoose.connect("mongodb+srv://ayush8120:GeGo5qhr7wM6VQyg@cluster0.n1nevi5.mongodb.net/company-project-01?retryWrites=true&w=majority",{useNewUrlParser:true})
.then(()=>{console.log("Data Base is connected")})
.catch((error)=>{console.log({error:error.message})})

app.use('/',route)

app.listen(process.env.PORT||3001,()=>{console.log("Express app running on PORT", 3001||process.env.PORT)})
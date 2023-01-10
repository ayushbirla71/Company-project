const userModel= require('../models/userModel')
const jwt= require('jsonwebtoken')

const createUser= async (req,res)=>{
    try {
        let data= req.body
        if(Object.keys(data).length==0)return res.status(400).send({status:false,message:"pls provide data"})
        let create= await userModel.create(data)
        return res.status(201).send({statsu:true,data:create})
    } catch (error) {
        return res.status(500).send({statsu:false,message:error.message})
    }
}

const login= async (req,res)=>{
    try {
        const {name,password}=  req.body
        if(!name||!password)return res.status(400).send({status:false,message:"pls provide name and password"})
        let data= await userModel.findOne({name,password})
        if(!data) return res.status(404).send({status:false,message:"incorrect password"})
        let token = jwt.sign(
            {
              userId: data._id.toString(),
            },
            "xyz", {
      
            expiresIn: '24h' // expires in 24 hours
      
          }
          );
          res.setHeader("x-auth-token", token);
          return res.status(201).send({ status: true, data: { token: token } });
    } catch (error) {
        return res.status(500).send({statsu:false,message:error.message})
    }
}

module.exports={createUser, login}
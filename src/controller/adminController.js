const userModel = require('../models/userModel')
const jwt = require('jsonwebtoken')

const creatAdmin= async (req,res)=>{
    try {
        let data=req.body
        let user=await userModel.create(data)
        return res.status(201).send({status:true,data:user})
    } catch (error) {
        return res.status(500).send({status:true,message:error.message})
    }
}

const login= async (req,res)=>{
    try {
        const {Email,password}=  req.body
        if(!Email||!password)return res.status(400).send({status:false,message:"pls provide name and password"})
        let data= await userModel.findOne({Email,password})
        if(!data) return res.status(404).send({status:false,message:"incorrect password"})
        let token = jwt.sign(
            {
              userId: data._id.toString(),
              type: data.type
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

module.exports={creatAdmin, login}
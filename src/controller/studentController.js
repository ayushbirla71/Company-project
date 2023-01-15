const userMode=require('../models/userModel')
const creatStudent= async (req,res)=>{
    try {
        let data=req.body
        let user=await userMode.create(data)
        return res.status(201).send({status:true,data:user})
    } catch (error) {
        return res.status(500).send({status:true,message:error.message})
    }
}
module.exports={creatStudent}
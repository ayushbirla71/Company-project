const QesModel= require('../models/qustionsMode')

const createQestion= async (req,res)=>{
try {
    let image = req.files
    let data= req.body
    if (image.length != 0) {data.img = await getImage(image)}
    let ques= await QesModel.create(data)
    return res.status(201).send({status:true,data:ques})
} catch (error) {
    return res.status(500).send({status:true,message:error.message})
}
}

const getQestion= async (req,res)=>{
    try {
        let randomDocs =await QesModel.aggregate([
            { $sample: { size: 10 } }
        ])
        return res.status(200).send({status:true,data:randomDocs})
    } catch (error) {
        return res.status(500).send({status:true,message:error.message})
    }
    }


const updateQestion= async (req,res)=>{
    try {
        let image = req.files
        let {qestionId,Qestion,option_A,option_B,option_C,option_D,subject}= req.body
        let Obj={}
        if(Qestion){
            Obj.Qestion=Qestion.trim()
        }
        if(option_A){
            Obj.option_A=option_A.trim()
        }
        if(option_B){
            Obj.option_B=option_B.trim()
        }
        if(option_C){
            Obj.option_C=option_C.trim()
        }
        if(option_D){
            Obj.option_D=option_D.trim()
        }
        if(subject){
            Obj.subject=subject.trim()
        }
        if(img){
            Obj.img=img.trim()
        }
        if (image.length != 0) {Obj.img = await getImage(image)}
        console.log(Obj)
        let ques= await QesModel.findByIdAndUpdate(qestionId,Obj,{new:true})
        return res.status(201).send({status:true,data:ques})
    } catch (error) {
        return res.status(500).send({status:true,message:error.message})
    }
    }
    
const deleteQestion= async (req,res)=>{
    try {
        let {qestionId}= req.body
        let ques= await QesModel.findOneAndDelete(qestionId)
        return res.status(201).send({status:true,message:"Delete successful"})
    } catch (error) {
        return res.status(500).send({status:true,message:error.message})
    }
}

module.exports={createQestion,updateQestion,deleteQestion,getQestion}
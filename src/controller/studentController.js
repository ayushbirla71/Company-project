const studentModel = require("../models/studentModel")

exports.CreateStudent = async (req,res)=>{
    try {
        let data = req.body
        if(Object.keys(data).length==0)return res.status(400).send({status:false,message:"pls provide data"})
        let name=data.name
        if(!name)return res.status(400).send({status:false,message:"pls provide name"})
        let keys = Object.keys(data)
        let subjectName = keys[1]
        if(!subjectName)return res.status(400).send({status:false,message:"pls provide subject name"})
        let subject = data[subjectName]
        let obj  = {}
        obj[subjectName] = subject
        let studentexist = await studentModel.findOne({name}).lean()
        if(studentexist){
            let dockeys = Object.keys(studentexist)
            if(dockeys.includes(subjectName)){
                let val = studentexist[subjectName]
                obj[subjectName] = subject+val
            }
            const updateStudent = await studentModel.findOneAndUpdate({name},obj,{new:true})
            return res.status(201).send({status:true,data:updateStudent})
        }
        obj.name=name
        const CreateStudent = await studentModel.create(obj)
        return res.status(201).send({status:true,message:"Successfuly",data:CreateStudent})
    } catch (error) {
        return res.status(500).send({status:false,message:error.message})
    }
}

exports.getStudent = async (req,res)=>{
    try {
        let name = req.body
        if(Object.keys(data).length==0)return res.status(400).send({status:false,message:"pls provide data"})
        let getStudents = await studentModel.findOne(name)
        if(!getStudents)return res.status(404).send({status:false,message:"No student Exists"})
        return res.status(200).send({status:true,message:"Successfuly",data:getStudents})
    } catch (error) {
        return res.status(500).send({status:false,message:error.message})
    }
}
exports.getStudents = async (req,res)=>{
    try {
        let getStudent = await studentModel.find()
        if(getStudent.length==0)  return res.status(404).send({status:true,message:"Student not found"})
        return res.status(200).send({status:true,data:getStudent})
    } catch (error) {
        return res.status(500).send({status:false,message:error.message})
    }
}

exports.updateStudent = async (req,res)=>{
    try {
        let data = req.body
        if(Object.keys(data).length==0)return res.status(400).send({status:false,message:"pls provide data"})
        let name=data.name
        if(!name)return res.status(400).send({status:false,message:"pls provide name"})
        let keys = Object.keys(data)
        let subjectName = keys[1]
        if(!subjectName)return res.status(400).send({status:false,message:"pls provide subject name"})
        let subject = data[subjectName]
        let obj  = {}
        obj[subjectName] = subject
        let studentexist = await studentModel.findOne({name})
        if(studentexist){
            const updateStudent = await studentModel.findOneAndUpdate({name},obj,{new:true})
            return res.status(201).send({status:true,message:"update Successfuly",data:updateStudent})
        }
    } catch (error) {
        return res.status(500).send({status:false,message:error.message})
    }
}

exports.deletestudent = async (req,res)=>{
    try {
        let name = req.body.name
        if(!name)return res.status(400).send({status:false,message:"pls provide name"})
        let deletestudent = await studentModel.deleteOne({name})
        if(!deletestudent)return res.status(404).send({status:false,message:"student not found"})
        return res.status(200).send({status:true,data:deletestudent})
    } catch (error) {
        return res.status(500).send({status:false,message:error.message})
    }
}
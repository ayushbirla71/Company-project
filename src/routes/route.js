const express= require('express');
const router= express.Router();
const {createUser,login}=require('../controller/userController')
const {CreateStudent,updateStudent,getStudents,getStudent,deletestudent}=require('../controller/studentController')


router.post("/register",createUser)
router.post("/login",login)
router.post("/students",CreateStudent)
router.get("/getallstudents",getStudents)
router.get("/getstudent",getStudent)
router.put("/updatestudent",updateStudent)
router.delete("/deletestudent",deletestudent)


router.all('/*',function(req,res){
    return res.status(400).send({status:false, message:"pls provide valid path"})
})

/////////////////////////////////////////////~MODULE~//////////////////////////////////
module.exports=router
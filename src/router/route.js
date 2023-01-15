const express= require('express');
const router= express.Router();
const {creatAdmin,login}=require('../controller/adminController');
const {createQestion,updateQestion,deleteQestion,getQestion}=require ('../controller/qestionsController');
const {Authentication}=require ('../middleware/auth')
const {Admin}=require ('../middleware/admin')


 router.post("/register",creatAdmin)
  router.post("/login",login)
 router.post("/Qestions",Authentication,Admin,createQestion)
 router.get("/getQestion",Authentication,getQestion)
 router.put("/updateQestion",Authentication,Admin,updateQestion)
 router.delete("/deleteQestion",Authentication,Admin,deleteQestion)


router.all('/*',function(req,res){
    return res.status(400).send({status:false, message:"pls provide valid path"})
})

/////////////////////////////////////////////~MODULE~//////////////////////////////////
module.exports=router
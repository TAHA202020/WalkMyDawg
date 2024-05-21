const express=require('express');
const connection=require('../db')
const encryptPassword=require('../bcrypt/encription')
const router = express.Router();


router.post("/",async (req,res)=>{
    if(req.session.user)
    {
        return res.send({response:"success",message:"already logged in"})
    }
    connection.query("select id,email,  name, last_name , pass_hash from client where email='"+req.body.email+"'",async (err,result)=>{
        if(err) throw err
        if(result.length<=0) return res.send({error:"email doesn't exist exists"})
        let compareResult=await encryptPassword.comparePassword(req.body.password,result[0].pass_hash)
        if(compareResult){
            console.log(result[0].id)
            req.session.user={id:result[0].id,email:result[0].email}
            
            res.send({response:"success",user:{name:result[0].name,last_name:result[0].last_name}})
        }
        else res.send({response :"error",message:"password doesn't match"})
        

    })

})
router.get("/",(req,res)=>{
    if(req.session.user)
    {
        res.send({response:"success",message:"already logged in"})
    }
    else
    {
        res.send({response:"failure",message:"not logged in"})
    }
})



module.exports=router
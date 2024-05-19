const express=require('express');
const connection=require('../db')
const encryptPassword=require('../bcrypt/encription')
const router = express.Router();


router.post("/",(req,res)=>{

    console.log(req.body)
    connection.query("select email from client where email='"+req.body.email+"'",async (err,result)=>{
        if(err) throw err
        if(result.length>0) return res.send({error:"email already exists"})
        let encryptedPassword=await encryptPassword.encryptPassword(req.body.password)
        connection.query("insert into client (email,pass_hash) values ('"+req.body.email+"','"+encryptedPassword+"')",(err,result)=>{
            if(err) throw err
            res.send({message:"registered"})
        })
    })

})



module.exports=router
const express=require('express');
const connection=require('../db');
const router = express.Router();


router.post("/",(req,res)=>{
    if(!req.session.user)
        return res.send({message:"failure" , error:"not logged in"})

    console.log(req.body)
    connection.query("update client set name='"+req.body.name+"',last_name='"+req.body.last_name+"' , email ='"+req.body.email+"' where id="+req.session.user.id+"",(err,result)=>{
        if(err){
            throw err
        }
        console.log(result)
        res.send({userinfo:req.body,message:"success"})}
    )

})

module.exports=router
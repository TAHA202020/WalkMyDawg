const express=require('express');
const router = express.Router();

router.get("/",(req,res)=>{
    req.session.destroy()
    res.send({response:"success"})
})


module.exports=router
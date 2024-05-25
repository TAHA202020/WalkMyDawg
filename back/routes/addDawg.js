const express=require('express');
const connection=require('../db');
const router = express.Router();


router.post("/",(req,res)=>
    {
        console.log(__dirname)
        req.files.images.map(file=>
        {
            file.mv(__dirname+"/../images/"+file.md5+"-"+Date.now()+file.name)
            console.log("added to the folder")
        })
        res.send({response:"success"})
    })


module.exports=router
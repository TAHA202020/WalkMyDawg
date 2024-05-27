const express=require('express');
const connection=require('../db');
const router = express.Router();
const {v4:uuidv4}=require('uuid')

router.post("/",(req,res)=>
    {
        if(!req.session.user)
            return res.send({response:"failure" , error:"not logged in"})
        console.log(req.body)
        if(req.body.name=="" || !req.files)
        {
            return res.send({response:"failure" , error:"empty fields"})
        }
        let filesNames=[]
        if(!Array.isArray(req.files.images))
            req.files.images=new Array(req.files.images)
        req.files.images.map(file=>
        {
            let newFileName=uuidv4()+getExtension(file.name)
            file.mv(__dirname+"/../images/"+newFileName)
            filesNames.push('"'+newFileName+'"')
        })
        connection.query("insert into dawgs (name,client_id,image) values ('"+req.body.name+ "','"+req.session.user.id+"','["+filesNames.join(",")+"]')",(err,result)=>{
            if(err) throw err
            res.send({response:"success"})
        })
})

function getExtension(file)
{
    let splittedFile=file.split(".")
    return "."+splittedFile[splittedFile.length-1]
}

module.exports=router
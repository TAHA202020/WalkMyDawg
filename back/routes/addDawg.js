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
        let joinedFiles="["+filesNames.join(",")+"]"
        //example :["43794b1b-a6de-4ac5-b412-51804b07161d.jpg","6b722cf9-1c55-4569-ac18-9becb97448c6.png","82d1bbd7-0308-4d53-b018-975ab800174f.jpg"]
        connection.query("insert into dawgs (name,client_id,image) values ('"+req.body.name+ "','"+req.session.user.id+"','"+joinedFiles+"')",(err,result)=>{
            if(err) throw err
            console.log()
            res.send({response:"success",dawg:{name:req.body.name,image:JSON.parse(joinedFiles)}})
        })
})

function getExtension(file)
{
    let splittedFile=file.split(".")
    return "."+splittedFile[splittedFile.length-1]
}

module.exports=router
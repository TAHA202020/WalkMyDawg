const express=require("express")
const connection=require("../db")
const router=express.Router();

router.get("/",async (req,res)=>{
    connection.query("select name ,last_name,email from client where id='"+req.session.user.id+"'",(err,result)=>
        {
            if(err) throw err

            if(!result[0]) return res.send({message:"failure"})
            //res.send({userinfo:result[0], message:"success"})
            let userinfo = result[0]
            connection.query("select name, image from dawgs where client_id='"+req.session.user.id+"'",(err,result)=>
                {
                    if(err) throw err
                    let dawgs=result.map((dawg)=>{
                        return {name:dawg.name,image:JSON.parse(dawg.image)}
                    })
                    console.log(dawgs)
                    res.send({userinfo:{...userinfo,dawgs}, message:"success"})
                })
        })
})


module.exports=router

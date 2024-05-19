
function isauth(req, res, next) 
{
    if(req.session.id)
    {  
        next()
    }
    else{
        return res.send({response:"failure"})
    }
}
module.exports=isauth

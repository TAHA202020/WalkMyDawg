const mysql=require('mysql')
let connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'hotel'
})
connection.connect((err)=>{
    if(err) throw err   
    console.log("connected")
})
module.exports=connection
const express=require('express');
const cors=require('cors');
const cookieParser=require('cookie-parser');
const expressSession=require('express-session');


//Routes
const getUserRoute=require('./routes/getUserRoute');
const loginRoute=require('./routes/loginRoute');
const registerRoute=require('./routes/registerRoute');
const logoutRoute=require('./routes/logoutRoute');
const updateUserRoute=require('./routes/updateUserRoute');
//App
const app=express();

app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.disable('x-powered-by');
app.use(expressSession({secret:'fgqseghsedjikghsikughszeuioghekzjsghezio',saveUninitialized:true,resave:true}));
app.use(cookieParser())
app.use(express.json());
app.use("/api/register",registerRoute);
app.use("/api/login",loginRoute);
app.use("/api/logout",logoutRoute)
app.use("/api/user-info",getUserRoute)
app.use("/api/update-user",updateUserRoute)


app.get("/",(req,res)=>
    {
        console.log("here")
        res.send({response:"success"})
})

app.listen(4000,()=>console.log(`server running on port http://localhost:4000/`))
const dotenv=require("dotenv")
const mongoose=require("mongoose")
const express=require("express");
const app=express();
const cookieparser =require("cookie-parser")
dotenv.config({path:"./config.env"})
//const port=app.env.PORT||3000
const Port=process.env.PORT
require("./db/conn")
app.use(express.json())
app.use(cookieparser())
//const User=require("./model/userschema")
app.use(require("./router/oauth")) //middleware hai

app.listen(Port,()=>{
    console.log(`server running ${Port}`)
})
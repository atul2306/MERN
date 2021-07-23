const jwt =require("jsonwebtoken")
const express = require("express")
const bcrypt=require("bcryptjs")
const router = express.Router()
const authenticate= require("../middleware/authenticate")
const cookieparser=require("cookie-parser")

require("../db/conn")

const User = require("../model/userschema")
router.get('/', (req, res) => {
    res.send("hello world from server")
})
//using promises
// router.post("./register",(req,res)=>{

//     const {name,email,phone,work,password,cpassword}=req.body()
//     if(!name||!email||!phone||!work||!password||!cpassword){
//          return res.status(422).json({error :"filled properly"})
//     }
//     User.findOne({email:email})
//     .then((userExist)=>{
//         if(userExist){
//             return res.status(422).json({error :"already exist"})
//         }
//         const user=new User({name,email,phone,work,password,cpassword})
//         user.save().then(()=>{
//             res.status(201).json({message:"user registered"})
//         }).catch((err)=> res.status(500).json({error:"failed to register"}))
//     }).catch(err=>{console.log(err)})
//     console.log()
// })
// module.exports=router


router.post("/register", async (req, res) => {
     // console.log(req)
    const { name, email, phone, work, password, cpassword } = req.body;
    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "filled properly" })
    }
    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: "already exist" })
        }
        else if(password!=cpassword){
            return res.status(422).json({ error: "filled properly" })
        }
        else{
        const user = new User({ name, email, phone, work, password, cpassword })
        // is jagah me password bcrypt kr denge
        await user.save()
        res.status(201).json({ message: "user registered" })
        }
       

        } catch (err) {
    console.log(err);
}

        //console.log()
    })


    router.post("/login",async(req,res)=>{
        
        
        try{
            const {email,password}=req.body;
            if(!email|| !password){
                return res.status(404).json({error:"invalid credential"})
            }  
            const checklogin= await User.findOne({email:email});
            
            if(checklogin){
                const checkpass= await bcrypt.compare(password,checklogin.password)
                const token=await checklogin.generateAuthToken();
                console.log(token)
                res.cookie("jwttoken",token,{
                    expires:new Date(Date.now()+25892000000),
                    httpOnly:true
                })
                if(checkpass ){
                    return res.status(202).json({message:"signed in success"})
                }
                else
                return res.status(404).json({error:"invalid credential"})
    
            }
            else{
                return res.status(404).json({error:"invalid credential"})
            }
            
        }catch(err){
            console.log(err)
        }
    })

    // about us ka page
    router.get('/about',authenticate,(req,res)=>{
       // console.log("h2");
     res.send(req.rootUser)
     })
     // get user data for contact us
     router.get("/getdata",authenticate,(req,res)=>{
        res.send(req.rootUser)
     })
     //contact us
     router.post("/contact",authenticate,async(req,res)=>{
       // res.send("hello from contact")
        try{
          const {name,email,phone,message}=req.body;
          if(!name||!email||!phone||!message){
             return res.json({error:"plz filled form"})
          }
          const check1= await User.findOne({_id:req.userID})
          if(check1){
              const usermessage= await check1.addMessage(name,email,phone,message);
              await check1.save();
              res.status(201).json({message:"user contact successfully done"})
          }
        }
        catch(err){
         console.log(err)
        }
    })
module.exports = router
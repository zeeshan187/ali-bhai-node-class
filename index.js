let express = require('express')
let app=express()
require('dotenv').config()
// Apis 
let mongoose=require('mongoose')
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/ali-bhai-class', {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("Database conntcted successfully");
}).catch((err)=>{
    console.log(err);  
})

const userSchema=new mongoose.Schema({
    email:String,
    password:String,
})
const User=mongoose.model('users', userSchema)

// middleware
// let RouteFilter=(req,resp, next)=>{
//     if(!req.query.age){
//         resp.send("please enter the age")
//     }
//     else if(req.query.age<18){
//         resp.send("You are under age")
//     }
//     else{
//         next()
//     }
// }
// app.get('/about', RouteFilter , (req, resp)=>{
//     resp.send("Dashboard page")
// })

app.post('/register', async (req, resp)=>{
    const newUser= new User(req.body)
    await newUser.save()
    resp.send("User register successfully");    
})


app.listen(process.env.port, ()=>{
    console.log(`App is running on port ${process.env.port}`);
})


let express = require('express')
let app=express()
require('dotenv').config()
// Apis 


// middleware
let RouteFilter=(req,resp, next)=>{
    if(!req.query.age){
        resp.send("please enter the age")
    }
    else if(req.query.age<18){
        resp.send("You are under age")
    }
    else{
        next()
    }
}
app.get('/about', RouteFilter , (req, resp)=>{
    resp.send("Dashboard page")
})

app.get('/home', (req, resp)=>{
    resp.send("Updated Home page")
    console.log(req.body);  
})

app.listen(process.env.port, ()=>{
    console.log(`App is running on port ${process.env.port}`);
})
// data store in db 
// post 


// data get from db 
// get 


// update data in db 
// put 


// delete data from db 
// delete 
const { log } = require('debug/src/browser');
const express=require('express');
const mongoose=require('mongoose');
const userModel=require('./userSchema')
const port=3003;
const app=express();
app.use(express.json())
mongoose.connect('mongodb://localhost:27017/userDB')
.then(()=>console.log('Database connected'))
.catch((err)=>console.log('Database not connected .error : ',err))

app.get('/', (req, res) => {
    res.send('Welcome to the User API');
  });

app.get('/userget',async(req,res)=>{
    try{
        const user=await userModel.find()
        res.json({
            data:user
        })
    }
    catch(err){
        console.log('error : ',(err));
        res.status(500).json({ error: 'Internal Server Error' }); 
    }
})
app.post('/userpost',async(req,res)=>{
    try{
        const newOne=req.body;
        const newUser=await userModel.create(newOne);
        res.status(201).json({
            data:newUser
        })
    }
    catch(err){
        console.log('error : ',(err));
       res.status(400).json({error:"error in creating user"}) 
    }
})

app.listen(port,()=>{
    console.log(`server running port is : ${port}`);
    
})
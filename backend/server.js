const express=require('express')
require('dotenv').config({path:'./config/config.env'})
require('./config/db').connectToDB()
const cors=require('cors')

const authRoute=require('./routes/auth')
const postRoute=require('./routes/post')

const app=express();
app.use(express.json())
app.use(cors())

app.use('/auth',authRoute)
app.use('/post',postRoute)

app.get('/test',(req,res)=>{
    res.send("Hello from other side")
})

app.listen(process.env.PORT,()=>{
    console.log(`Server running at port : ${process.env.PORT}`);
})
const http=require('http');
const {load}=require('./app.js');
const writer = require('./app.js')
const express=require('express');
const app=express();
const cors=require('cors');
app.use(cors({
    origin:"*",
}))
const port=3000;
app.listen(port,()=>console.log("The server is running at port 3000..."));
app.get('/user',(req,res)=>
{
    res.send(load())
});

writer.filewriter();


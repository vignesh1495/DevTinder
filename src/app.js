const express = require('express');



const app = express();

app.listen(3000,()=>{
    console.log("server has started successsfully");
});

app.use("/test",(req,res)=>{
    res.send("Hello from the server!");
});

app.use("/hello",(req,res)=>{
    res.send("Hello hello hello hello!");
});

app.use("/world",(req,res)=>{
    res.send("Hello world world is beautiful!");
});
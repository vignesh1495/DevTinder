const mongoose = require('mongoose');
const express = require('express');
const mongoURI = 'mongodb+srv://vigneshdevendev:N0tUGie7srHGzxd1@namastenode.mgmmc.mongodb.net/devTinder';


const app = express();
app.use(express.json());

const connectDB = async()=>{
    await mongoose.connect(mongoURI);
};

connectDB().then(()=>{
    console.log("Database connection is established");
 
    app.listen(3000,()=>{
        console.log("server has started successsfully");
    });
}).catch(()=>{
    console.log("connection not established");
});

module.exports={
    app
}
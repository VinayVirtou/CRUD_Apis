const express = require("express");
const Datamodel = require("../model/Data")

const app = express();

//add data api
app.post("/add_data",(req,res)=>{
    //res.send("ADD_Data_API")
    const data = new  Datamodel(req.body);

    data.save(); 
    res.send(data); 
    
})

//get data api
app.get("/get_data",(req,res)=>{
    res.send("GET_Data_API")
})

module.exports = app;
var express=require("express");
var cors=require("cors");
const bodyparser = require('body-parser');
const noteRoute=require("./route/note-app");
var app=express();

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(cors());


app.get('/',(req,res)=>{
    res.send("server start ............")
})

app.use("/api/v1",noteRoute)
app.listen(3000,()=>{
    console.log("server start .............")
})

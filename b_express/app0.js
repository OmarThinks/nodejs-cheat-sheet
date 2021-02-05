var express = require("express")

var app = express()

app.get("/",function(req,res)
{res.send("Hello, World!");})


app.get("/page",function(req,res)
{res.send("This is page");})

app.listen(3000)
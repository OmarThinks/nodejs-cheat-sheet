var express = require('express')
var cors = require('cors')
var app = express()

var corsOptions = {
    "origin": "*",
    "methods": "GET,PUT,PATCH,POST,DELETE",
    "allowedHeaders": ['Content-Type', 'Authorization']
}

app.use(cors(corsOptions));
app.set("view engine", "ejs");


app.get("/",function(req,res)
{res.render("index");})

app.get("/data1/:id",function(req,res)
{res.render("example1", { "id" : req.params.id } ) })

app.listen(3000)

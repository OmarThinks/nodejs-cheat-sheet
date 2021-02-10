var express = require('express')
var cors = require('cors')
var app = express()

var corsOptions = {
  "origin": "*",
  "methods": "GET,PUT,PATCH,POST,DELETE",
  "allowedHeaders": ['Content-Type', 'Authorization']
}

app.use(cors(corsOptions))

app.get("/",function(req,res)
{res.send("Hello, World!");})

app.listen(3000)
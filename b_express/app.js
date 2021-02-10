var express = require("express")

var app = express()

app.get("/",function(req,res)
{res.send("Hello, World!");})

app.get("/products/:id",function(req,res)
{
	id = req.params.id;
	res.send("Product id is : " + id );
})

app.listen(3000)
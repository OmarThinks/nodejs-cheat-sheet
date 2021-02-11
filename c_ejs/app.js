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
{
	var id = 5;
	data  = 
	{
		"name": "Labtop",
		"in_stock": true,
		"orders_id": [ 1 , 2 , 3 , 4 , 5 ]
	}
	res.render("index", { "id" : id, data : data } );
})

app.listen(3000)

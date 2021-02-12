var express = require('express')
var cors = require('cors')
var app = express()

var corsOptions = {
    "origin": "*",
    "methods": "GET,PUT,PATCH,POST,DELETE",
    "allowedHeaders": ['Content-Type', 'Authorization']
}

app.use(cors(corsOptions));

// Level2: Using EJS
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
	// Level 2 :rendering templates
	// Level 3: Passing data to template
	res.render("index", { "id" : id, data : data } );
})

app.listen(3000)

// Level 7: Static files
app.use("/static", express.static("static"));

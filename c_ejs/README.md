# C) EJS



## Bash Commands
<b>

```bash
# Level 1:
npm init
npm install express --save
npm install ejs --save
```
</b>



## Javascripts file:

<b>

```javascript
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
```

</b>


## HTML Template: 


<b>

```html
<!Doctype html>
<html>
<head>
	<!-- Level 7: using static files -->
	<link href="/static/css/style.css" rel="stylesheet" type="text/css">
</head>
<body>

<!-- Level 3 : passing data to templates -->
<p>
The id is :<br>
<%= id %>
</p>

<!-- Level 4 : consitionals -->
<p>
<%if (data.in_stock) { %>
The product is in stock
<% } %>
</p>

<h2>Orders: </h2>

<!-- Level 5 : looping through list : -->

<ul>

<% data.orders_id.forEach(function(item){ %>
	<li> <%= item %> </li>
<% }); %>

</ul>

<!-- Level 6 : Partial views -->
<%- include("partials/navbar.ejs") %>
</body>
</html>
```

</b>


## Level 1: Installing:

<b>

```bash
npm init
npm install express --save
```
</b>






# Level 2 : rendering:

create a folder called `views`.  
Create inside of it  file called **`index.ejs`**.
fill it with this code:

<b>

```html
<p>
number <br>
This is a template
</p>
```

</b>

In **`app.js`**:

<b>

```javascript
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

app.listen(3000)
```

</b>


















# Level 3: passing data to the template:

<b>

```javascript
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
```

</b>

Now in `example1.ejs` file, we will fill it with this code:

<b>

```html
<p>
The id is :<br>
<%= id %>
</p>
```

</b>















# Level 4: Conditionals:

<b>

```html
<%if (data.in_stock) { %>
The product is in stock
<% } %>
```

</b>


# level 5: looping through list:

<b>

```html
<ul>

<% data.orders_id.forEach(function(item){ %>
	<li> <%= item %> </li>
<% }); %>

</ul>
```

</b>




# Level 6: Partail views:

<b>

`partials/navbar.html`


```html
<ul>
	<li> Contact us </li>
	<li> about </li>
</ul>
```

</b>

Inside **`app.ejs`**


<b>


```javascript
<%- include("partials/navbar.ejs") %>
```

</b>




# Level 7: static files:

Create a CSS file **`static/css/style.css`**: 

```CSS
p
{ background-color : pink ; }
```


Now, in **`app.js`**:

<b>

```javascript
app.use("/static", express.static("static"));
```	

</b>



In **`index.js`**:

<b>
	
```javascript
<link href="/static/css/style.css" rel="stylesheet" type="text/css">
```

</b>





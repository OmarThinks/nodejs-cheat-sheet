# B) Express



## Bash Commands
<b>

```bash
# Level 1:
npm init
npm install express --save
npm install cors --save
```
</b>



## Javascripts commands:

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

app.use(cors(corsOptions))

app.get("/",function(req,res)
{res.send("Hello, World!");})

app.get("/products/:id",function(req,res)
{
	id = req.params.id;
	res.send("Product id is : " + id );
})

app.listen(3000)
```

</b>






## Level 1: Installing and uninstalling:




<b>

```bash
npm init
npm install express - save
```
</b>




# Level 2 : minimal app

Create a file called **`app.js`**

<b>

```javascript
var express = require("express")

var app = express()

app.get("/",function(req,res)
{res.send("Hello, World!");})

app.listen(3000)
```

</b>


In the CLI, run this command:

<b>

```bash
nodemon app
```

</b>













## Level 3: Using Cors:

<b>

```bash
npm install cors --save
```

```javascript
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
```

</b>












## Level 4: Route parameters:

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

app.use(cors(corsOptions))

app.get("/",function(req,res)
{res.send("Hello, World!");})

app.get("/products/:id",function(req,res)
{
	id = req.params.id;
	res.send("Product id is : " + id );
})

app.listen(3000)
```

</b>














# Level 5: sending static file:

Create a file called `index.html`.  
Fill it with this code:

```html
<h1>
Hi There
</h1>
<p>
This is a static file
</p>
``` 

now in app.js add this endpoint:

<b>

```javascript
app.get("/static",function(req,res)
{res.sendFile(__dirname + "index.html");})
```

</b>

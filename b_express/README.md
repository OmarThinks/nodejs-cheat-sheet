# B) Express



## Bash Commands
<b>

```bash
# Level 1:
npm init
npm install express --save
npm uninstall express
npm install



```
</b>



## Javascripts commands:

<b>

```javascript
// Level 2: minimal app
var express = require("express")

var app = express()

app.get("/",function(req,res)
{res.send("Hello, World!");})

app.listen(3000)
```

</b>


## Minimal app with CORS:

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

app.listen(3000)
```

</b>





## Level 1: Installing and uninstalling:




<b>

```bash
npm init
npm install express - save
npm uninstall express
```
</b>



This command:

<b>

```bash
npm install
```

</b>

Will install all the packages in the `package.json` file.



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

app.get("/products",function(req,res)
{
	//id = req.params.id;
	res.send("Product id is")
})

app.listen(3000)
```



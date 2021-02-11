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

app.get("/static",function(req,res)
{res.sendFile(__dirname + "/index.html");})

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




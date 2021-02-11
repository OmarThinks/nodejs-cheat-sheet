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



## Javascripts commands:

<b>

```javascript


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
app.get("/data1/:id",function(req,res)
{res.render("example1", { "id" : req.params.id } ) })
```

</b>

Now in `example1.ejs` file, we will fill it with this code:

<b>

```html
<p>
Th id is :<br>
<%= id %>
</p>
```

</b>











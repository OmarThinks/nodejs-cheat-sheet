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
nodemon app0
```

</b>













## Level 2: Using Cors:

<b>

```bash
npm install cors
```

</b>









# B) Express




<b>

```bash
npm init
npm install express - save
npm uninstall express
npm install
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



# Level2: minimal app

Create a file called **`app0.js`**

<b>

```javascript
var express = require("express")

var app = express()

app.get("/",function(req,res)
{res.send("Hello, World!");})


app.get("/page",function(req,res)
{res.send("This is page");})

app.listen(3000)
```

</b>


In the CLI, run this command:

<b>

```bash
nodemon app0
```

</b>


# nodejs-cheat-sheet
 exploring Nodejs

# Important Node Commands:

<b>

```bash
# Level 1
node -v
node <file-name>

# Level 4
npm init
npm install <packagename>  --save
npm install <packagename>  --save-dev #To use package in dev not production
npm install express --save

npm uninstall <packagename>
npm uninstall express
npm install # To install all the packages in the package.json

# Level 5
npm install nodemon -g
nodemon <file name>
```

</b>





# Important JavaScript Commands:

<b>

```javascript
// Level 1: Hello. World!
console.log("Hello, World!");

// Level 2: Functions
function foo1(){/*1) Simple function*/}
function foo2(input1){/*2) Function with parameters*/}
var foo3 = function(input1){/*3) Function expression*/}
var foo4 = (input1) => {/*4) Arrow function*/}
var foo5 = (func) => { func(); /*5) Passing functions*/}

// Level 3: Export and require
// In the functions file 
function foo(){/*This function will be exported*/}
module.exports={foo:foo}

// In the app file
var functions = require("./functions")
var foo = functions.foo;
// Now the variable has been imported

```

</b>







# Level 1: Hello, World!

```bash
node -v
node <file-name>

```


Run this command inside the **CLI**

<b>

```bash
node -v
```

</b>

To see the current version of NodeJS installed on your
device.


- Create a file called **`app.js`**.
- Copy this code and paste it inside of `app.js`

<b>

```javascript
console.log("Hello, World!");
```
</b>

Now, in the **CLI**, run this code:

<b>

```bash
node <file-name>
```

</b>

Like That:
<b>

```bash
node app
```

</b>

It will print `Hello, World!` in the CLI.  
The command `console.log("data")` will not pront in the console of the browser.  
Rather, it will print in the on you CLI.






# Level 2: Functions:

Summary:

<b>

```javascript
function foo1(){/*1) Simple function*/}
function foo2(input1){/*2) Function with parameters*/}
var foo3 = function(input1){/*3) Function expression*/}
var foo4 = (input1) => {/*4) Arrow function*/}
var foo5 = (func) => { func(); /*5) Passing functions*/}
```
</b>

This is an example:


<b>

```javascript
/*
# 1
Normal function
*/
console.log("________________________________ 1) Very simple function:")
function hello1()
{
	console.log("Hello, World!");
}
hello1();
// Hello, World!


/*
# 2:
Function with paramaters:
*/
console.log("________________________________ 2) Function with paramters")
function hello2(theName)
{
	console.log("Hello, "+theName+"!");
}
hello2("Mohammed");
// Hello, Mohammed!


/*
# 3
Function expression:
*/
console.log("________________________________ 3) Function expression")
var hello3 = function(theName)
{
	console.log("Hello again, "+theName+"!");
}
hello3("User");
// Hello again, User!


/*
# 4
Arrow function:
*/
console.log("________________________________ 4) Arrow Function")
var hello4 = (theName) => 
{
	console.log("Hello again and again, "+theName+"!");
}
hello4("Userrrr");
// Hello again and again, Userrrr!


/*
# 5
Function in a function:
*/
console.log("________________________________ 5) Function in a function")
function innerFunction(func) 
{
	func();
}
innerFunction(hello1);
// Hello, World!

```

</b>

Result:

```
________________________________ 1) Very simple function:
Hello, World!
________________________________ 2) Function with paramters
Hello, Mohammed!
________________________________ 3) Function expression
Hello again, User!
________________________________ 4) Arrow Function
Hello again and again, Userrrr!
________________________________ 5) Function in a function
Hello, World!
```


















# Level 3: require and modules:

Create a file and call it `functions.js`.  
Put this code inside of it:

<b>

```javascript
// In the functions file 
function foo(){/*This function will be exported*/}
module.exports={foo:foo}

// In the app file
var functions = require("./functions")
var foo = functions.foo;
// Now the variable has been imported
```
</b>

Example:

<b>

```javascript
// Return the addition of 2 inputs
function adding( a , b )
{return a + b;}

// Return the multiplication of 2 inputs
function multiplying( a , b )
{return a * b;}

password = "123"

module.exports =
{
	"adding" : adding ,
	"multiplying" : multiplying ,
	"password" : password
}

/*
// Or we can say
module.exports.adding = adding
module.exports.multiplying = multiplying
module.exports.password = password
*/
```

</b>


Now create a file called `app.js`.  
Put this code inside of it:

<b>

```javascript
var functions = require("./functions")

var adding = functions.adding;
var multiplying = functions.multiplying;
var password = functions.password;

console.log(typeof(multiplying))

console.log("____________________ 1) Using adding:")
console.log(adding(5,6))

console.log("____________________ 2) Using multiplying:")
console.log(multiplying(5,6))

console.log("____________________ 3) Using password:")
console.log(password)
```

</b>








# Level 4: Installing and unistalling packages:

<b>

```bash
npm init
npm install <packagename>  --save
npm install <packagename>  --save-dev #To use package in dev not production
npm install express --save

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










# Level 5

<b>

```bash
npm install nodemon -g
nodemon <file name>
```

</b>


This will install nodemon.  
This will refresh all the files when running them, 
if you make any changes to them.  




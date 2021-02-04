# nodejs-cheat-sheet
 exploring Nodejs

# Important Node Commands:

<b>

```bash
# Level 1
node -v
node <file-name>
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

```shell
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

```javascript
function muliply(a,b)
{
	return (a*b)
}
```





















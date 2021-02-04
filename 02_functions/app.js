/*
This is the first way to create a function
*/
console.log("________________________________ 1) Very simple function:")
function hello1()
{
	console.log("Hello, World!");
}
hello1();



/*
The second way to create a function:
With paramaters:
*/

console.log("________________________________ 2) Function with paramters")
function hello2(theName)
{
	console.log("Hello, "+theName+"!");
}

hello2("Mohammed");



/*
The third way to create a function:
Function expression:
*/


console.log("________________________________ 3) Function expression")
var hello3 = function(theName)
{
	console.log("Hello again, "+theName+"!");
}

hello3("User");








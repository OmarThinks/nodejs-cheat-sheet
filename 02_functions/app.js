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
Function expression:
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
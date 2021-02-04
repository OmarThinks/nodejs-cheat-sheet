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

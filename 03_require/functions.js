// Return the addition of 2 inputs
function adding(a,b)
{return a+b;}

// Return the multiplication of 2 inputs
function multiplying(a,b)
{return a*b;}

password = "123"

module.exports =
{
	adding:adding,
	multiplying:multiplying,
	password:password
}

/*
// Or we can say
module.exports.adding = adding
module.exports.multiplying = multiplying
module.exports.password = password
*/

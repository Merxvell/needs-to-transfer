/*
This file will be used to describe changing a variable
or updating a declared variable. Once a variable is delcared you
DO NOT HAVE TO REDECLARE IT, just use the variable name and the
assignment operator (=) to assign the new value
*/

var inStock;
var shipping;

inStock = false;
shipping = true;

//some random processing goes on here for some reason idk

inStock = true;
shipping = false;

var elStock = document.getElementById('stock');
elStock.className = inStock; //will be true
var elShip = document.getElementById('shipping');
elShip.className = shipping; //will be false

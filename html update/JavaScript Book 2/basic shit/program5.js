/*
Uses a boolean to identity if the object is shipping
or if the object is inStock. will output true and false
the CSS class rule of T/F are as follows:
True: shows a check
False: shows a cross
can also be thought of as on/off, 1/0
used when code can take multiple paths
*/
var inStock;
var shipping;
inStock = true;
shipping = false;

var elStock = document.getElementById('stock-program5');
elStock.className = inStock;
var elShip = document.getElementById('shipping-program5');
elShip.className = shipping;

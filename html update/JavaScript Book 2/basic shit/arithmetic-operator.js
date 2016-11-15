/*
Math operators that are commonly used in Javascript and needed for methods
expressions, functions etc. Know how they operate, know what they're used for
know when to use them.
+ = addition
- = subtraction
/ = division
* = multiplication
++ = increment
-- = decrement
% = divides two values and returns the remainder (modular)
know order of execution
-multiplication and division before addition subtraction
THIS CAN EFFECT THE END RESULT
ex
2+4+10 = 16
2+4*10 = 42
*/

var subtotal = (13 + 1) * 5; //subtotal = 70
var shipping = 0.5 * (13+1); //shipping = 7

var total = subtotal + shipping; //77

var elSub = document.getElementById('subtotal');
elSub.textContent = shipping;

var elShip = document.getElementById('shipping');
elShip.textContent = shipping;

var elTotal = document.getElementById('total');
elTotal.textContent = total;

/*
This javascript file is used to show some common shorthand
practices and various programming styles. These can save time, and effort,
while making the code more readable to some while less to others.
If using shorthand make sure that everything is done correctly and be careful.
*/

//variables are declared and assigned on the same statment
var price = 5;
var quantity = 14;
var total = price * quantity;

//Three variabls are declared on same line then their values on different lines
var price, quantity, total;
price = 5;
quantity = 14;
total = price * quantity;

//Two variables are declared and assigned on the same line, one on different line
var price = 5, quantity = 14;
var total = price * quantity;

//Here a variable is used to hold a reference to an element in the HTML page
var el = document.getElementById('cost');
el.textContent = '$' + total;

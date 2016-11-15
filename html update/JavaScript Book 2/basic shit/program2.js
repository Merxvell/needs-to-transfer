/*
example of multiplication in .js
shows numeric and string data
shows adding elements to the document via
.getElementById('elements ID')
*/

var price;
var quantity;
var total;

price = 5;
quantity = 14;
total = price * quantity;
var el = document.getElementById('cost');
el.textContent = '$' + total;

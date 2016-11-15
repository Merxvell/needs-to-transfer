/*
An array is a special type of variable that can store a list of DIFFERENT
VALUES.
USE AN ARRAY WHEN WORKING WITH A LIST OR SET OF VALUES THAT ARE RELATED
advantages
-great when the item count is unknown
-don't need to specify how many values it will hold
-numbers between arrays can be different
-values act a a numbered list (easy imo starts at 0)
-can display length with the length property
*/

var colors;
colors = ['white', 'black', 'custom'];
var el = document.getElementById('colors');
el.textContent = color[0];

//or

var colors = [
    'white',
    'black',
    'custom'
];

//or, this one is known as an ARRAY CONSTRUCTOR
var colors = new Array(
  'white',
  'black',
  'custom'
);

var el = document.getElementById('colors');
el.textContent = colors[0]; //white

/*
After an array has been created you can change the value of it by
selecting it and assigning it a new value, as the example code shows
in this it changes the third item ([2]) from 'custom' to beige
*/
//create array
var color = ['white', 'black', 'custom'];

//update the third item
colors[2] = 'beige';

//get the element with an id of colors
var el = document.getElementById('colors');

//Replace the third tem from the array
el.textContent = color[2]; //beige

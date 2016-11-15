//ADDING ITEMS TO START AND END OF LIST
var list = document.getElementsByTagName('ul')[0]; //get ul element

//ADD NEW ITEM TO END OF LIST
var newItemLast = document.createElement('li'); //create a new li
var newTextLast = document.createTextNode('cream'); //make its text "cream"
newItemLast.appendChild(newTextLast); //put a text node in it
list.appendChild(newItemLast); //update the list

//ADD NEW ITEM START OF LIST
var newItemFirst = document.createElement('li'); //create element
var newTextFirst = document.createTextNode('kale'); //create text node
newItemFirst.appendChild(newTextFirst); //add text node to element
list.insertBefore(newItemFirst, list.firstChild); //add element to list
var listItems = document.querySelectorAll('li'); //all li elements

//ADD A CLASS OF COOL TO ALL LIST ITEMS
var i; //var i represnets point in list
for(i=0; i<listItems.length; i++){ //loop through list
  listItems[i].className = 'cool'; //make all classes "cool"
}

//ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var heading = document.querySelector('h2'); //h2 element
var headingText = heading.firstChild.nodeValue; //h2 text
var totalItems = listItems.length; //get list length
var newHeading = headingText + '<span>' + totalItems + '</span>'; //give h2 a text of list length
heading.innerHTML = newHeading;  //update h2

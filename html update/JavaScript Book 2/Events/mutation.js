var elList, addLink, newEl, newText, counter, listItems; //Define variables

elList  = document.getElementById('list'); //get list
addLink = document.querySelector('a'); //get add item button
counter = document.getElementById('counter'); //get item counter

function addItem(e){ //declare function
  e.preventDefault(); //prevent link action
  newEl = document.createElement('li'); //new <li> element
  newText = document.createTextNode('New list item'); //new text node
  newEl.appendChild(newText); //add text to <li>
  elList.appendChild(newEl); //add<li> to list
}

function updateCount(){ //declare function
  listItems = list.getElementsByTagName('li').length; //get total number of <li>
  counter.innerHTML = listItems; //update counter
}

addLink.addEventListener('click', addItem, false); //click on button
elList.addEventListener('DOMNodeInserted', updateCount, false); //DOM button

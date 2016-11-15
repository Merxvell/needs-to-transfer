function getTarget(e){ //Declare function
  if(!e){ //If there is no event object
    e = window.event; //use old IE event object
  }
  return e.target || e.srcElement; //get the target of event
}

function itemDone(e){ //Declare function
  //Remove item from the list
  var target, elParent, elGrandparent; //Declare variables
  target = getTarget(e); //get the item clicked link
  elParent = target.parentNode; //get its list item
  elGrandparent = target.parentNode.parentNode; //get its list
  elGrandparent.removeChild(elParent); //remove list item from list

  //Prevent the link from taking you elsewhere
  if (e.preventDefault){ //if preventDefault() workds
    e.preventDefault(); //use preventDefault()
  }else{ //otherwise
    e.returnValue = false; //use old IE version
  }
}

//Set up event listeners to call itemDone() on click
var el = document.getElementById('shoppingList'); //Get shopping list
if(el.addEventListener){ //if event listeners work
  el.addEventListener('click',function(e){ //add listener on click
    itemDone(e); //it calls itemDone()
  },false); //use bubbling phase for flow
}else{ //otherwise
  el.attachEvent('onclick', function(e){ //use old IE model: onclick
    itemDone(e); //call itemDone()
  });
}

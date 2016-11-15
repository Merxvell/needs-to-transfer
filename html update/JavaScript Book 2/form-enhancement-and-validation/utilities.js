//helper function to add an event listener
function addEvent(el, event, callback){
  if('addEventListener' in el){ //if addEventListener works
    el.addEventListener(event, callback, false);  //use it
  }else{
    el['e' + event + callback] = callback;  //make callback a method
    el[event + callback] = function(){  //add second method
      el['e' + event + callback](window.event); //use it to call prev function
    };
    el.attachEvent('on' + event, el[event + callback]); //use atachEvent()
  } //to call second funciton, which then calls the first one
}

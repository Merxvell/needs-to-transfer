/*
Example of a statement in javaScript.
var today is a statement
{ indicate start and end of code block}
if else statments determine which code should run
JAVASCRIPT IS CASE SENTSITIVE
*/
var today = new Date();
var hourNow = today.getHours();
var greeting;

if(hourNow > 18){
  greeting = 'Good Evening';
}else if (hourNow > 12){
  greeting = 'Good Afternoon';
}else if(hourNow > 0){
  greeting = 'Good Morning';
}else{
  greeting = 'Welcome';
}

document.write(greeting);

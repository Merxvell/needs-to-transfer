/* switch statmens start with a variable called a
switch value. Each case indicates a possible value foor this
and the code that should run if the variable matches the code*/
var msg; //msg
var level = 2; // level

//Determine message based on level
switch (level){
  case 1:
  msg = 'Good luck fgt';
  break;
  case 2:
  msg = 'Round 2 electric boogalo';
  break;
  case 3:
  msg = 'Round 3 do not fuck up';
  break;
  default:
  msg = 'this case isn\'t working';
}

var el = document.getElementById('answer7');
el.textContent = msg;

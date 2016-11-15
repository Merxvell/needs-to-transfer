var score = 75;
var msg = '';

function congradulate(){
  msg += 'Congratulations!';
}

if(score >= 50){
  congradulate();
  msg += 'Proceed to next round';
}

var el =document.getElementById('answer6');
el.innerHTML = msg;

var width = 12; //declare width
var height = 'test'; //declare height

function calculateArea(width, height){
  try{
    var area = width * height;  //try to calculate area
    if (!isNaN(area)){ //if it is a number
      return area; //return a number
    }else{ //else throw error exception
      throw new Error('calculateArea() received an invalid number');
    }
  }catch (e){ //if there was an error
    console.log(e.name + ' ' + e.message); //show error in console
    return 'We are unable to calculate the area.'; //show users a message
  }
}
//TRY TO SHOW THE AREA ON THE PAGE
document.getElementById('area').innerHTML = calculateArea(width, height);

document.writeln('Hello, world!');

// object literal
var empty_object = {};

var stooge = {
  "first-name": "Jerome",
  "last-name": "Howard"
};


//Object nest
var flight = {
  airline: "Oceanic".
  number: 815,
  departure:{
    IATA: "SYD",
    time: "2004-09-22 14:55",
    city: "Sydney"
  },
  arrival: {
    IATA: "LAX",
    time: "2004-9-23 10:42",
    city: "Los Angles"
  }
};

//retrival

//String wrap method

stooge["first-name"]; //Jerome

//dot notation

flight.departure.IATA; //"SYD"

//undefined
/*
document.writeln(stooge["middle-name"]); //undefined
document.writeln(flight.status); //undefined
document.writeln(stooge["FIRST-NAME"]); //undefined CASE SPECIFIC
*/

// the || operator

var middle = stooge["middle-name"] || "(none)";
var status = flight.status || "unknown";

//update

stooge['first-name']= "Joe";

//object doesn't exist update
stooge['middle-name'] = 'Lester';
stooge.nickname = 'Curly';
flight.equipment = {
  model: 'Boeing 777'
};
flight.status = 'overdue';

//reference

var x = stooge;
x.nickname = 'Curly';
var nick = stooge.nickname;
  //nick is 'Curly' because x and stooge
  //are references to the same point

var a = {}, b = {}, c = {};
  //a, b, c each refere to a
  //DIFFERENT empty object

a = b = c = {}
  //a, b, and c all refer to
  //the SAME empty object


//prototype

//add a create method
if(typeof Object.create !== 'function'){
  Object.create = function(o){
    var F = function() {};
    F.prototype = o;
    return new F();
  }
};
var another_stooge = Object.create(stooge);

//updating and prototype

another_stooge['first-name'] = 'Harry';
another_stooge['middle-name'] = 'Moses';
another_stooge.nickname = 'Moe';

//retrieving value from a prototype
stooge.profession = 'actor';
another_stooge.profession; //'actor'

//reflection

//typeof

typeof flight.number; //'number'
typeof flight.status; //'string'
typeof flight.arrival; //'object'
typeof flight.manifest; //'undefined'

//prototype chain and type of
typeof flight.toString //'function'
typeof flight.constructor //'function'


//hasOwnProperty
flight.hasOwnProperty('number'); //true
flight.hasOwnProperty('constructor'); //false

//Enumeration

//excluding specific properties
var name;
for (name in another_stooge){
  if(typeof another_stooge[name] !== 'function'){
    document.writeln(name + ': ' + another_stooge[name]);
  }
}

//enumerating in a specific order
var i;
var properties = {
  'first-name',
  'middle-name',
  'last-name',
  'profession'
};
for (i = 0; i < properties.length; i += 1){
  document.writeln(properties[i] + ': ' + another_stooge[properties[i]]);
}

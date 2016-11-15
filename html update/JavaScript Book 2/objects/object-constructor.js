/*
constructor function for creating an Object
to access a property of this object use dot notation
EX hotel.name would get the hotels name
can also use dot notation to use the method
*/
var hotel = new Object();

hotel.name = 'Park';
hotel.rooms = 120;
hotel.booked = 77;
hotel.checkAvailability = function(){
  return this.rooms-this.booked;
};

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;
var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();

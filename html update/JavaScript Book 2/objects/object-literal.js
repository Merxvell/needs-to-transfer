//object is called hotel
//content of page is updated with data from the hotel
//objects (name, rooms, booked, checkAvailability)
//to access a property from this object the object name is followed
//by a dot and the name of the property desired, same with the method

var hotel = {
  //object
  name: 'Quay', //property
  rooms: '40', 
  booked: '25',
  //method
  checkAvailability: function(){
    return this.rooms- this.booked;
  }
};

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();

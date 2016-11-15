var hotel = {
  name: 'Park',
  rooms: 120,
  booked: 77,
  checkAvailability: function(){
    return this.rooms-this.booked;
  }
};

var elName2 = document.getElementById('hotelName2');
elName2.textContent = hotel.name;

var elRooms2 = document.getElementById('rooms2');
elRooms2.textContent = hotel.checkAvailability();

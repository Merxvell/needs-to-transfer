/*
First a constructor function defines the template for the two objects (quay and park)
since both use the same properties (name, rooms, booked, checkAvailability etc) it's
easier to just reuse the assets instead of make new ones.
*/
function Hotel(name, rooms, booked) { //constructor
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function() {
        return this.rooms - this.booked;
    };
}

var quayHotel = new Hotel('Quay', 40, 25); //instance
var parkHotel = new Hotel('Park', 120, 77); //instance

var details1 = quayHotel.name + ' rooms: ';
details1 += quayHotel.checkAvailability();
var elHotel1 = document.getElementById('hotel1');
elHotel1.textContent = details1;

var details2 = parkHotel.name + ' rooms: ';
details2 += parkHotel.checkAvailability();
var elHotel2 = document.getElementById('part2');
elHotel2.textContent = details2;

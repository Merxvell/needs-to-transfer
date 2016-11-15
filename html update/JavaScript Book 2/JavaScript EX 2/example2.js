/* The script is placed inside an immediately invoked function expression which
helps protect the scope of variables*/

(function() {
    //PART ONE: CREATE HOTEL OBJECT AND WRITE OUT THE OFFER DETAILS

    //Create a hotel object using object literal syntax
    var hotel = {
        name: 'Park',
        roomRate: 240, //amount in dollars
        discount: 15, //Percentage discount
        offerPrice: function() {
            var offerRate = this.roomRate * ((100 - this.discount) / 100);
            return offerRate;
        }
    }

    var hotelName, roomRate, specialRate; //declare variables

    hotelName = document.getElementById('hotelName'); //get Elements
    roomRate = document.getElementById('roomRate');
    specialRate = document.getElementById('specialRate');

    hotelName.textContent = hotel.name; //write hotel name
    roomRate.textContent = '$' + hotel.roomRate.toFixed(2); //write hotel room roomRate
    specialRate.textContent = '$' + hotel.offerPrice(); //write offer price

    //PART TWO: CALCULATE AND WRITE OUT THE EXPIRY DETAILS FOR THE offer
    var expiryMsg; //Message displayed to users
    var today; //today's date
    var elEnds; //the element that shows the message about the offer ending

    function offerExpires(today) {
        //Declare the variables within the funciton for local scope
        var weekFromToday, day, date, month, year, dayNames, monthNames;
        //Add 7 days time (added in milliseconds)
        weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
        //Create arrays to hold the names of days / monthNames
        dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
            'Thursday', 'Friday', 'Saturday'
        ];
        monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];

        //Collect the parts of the date to show up on the Page
        day = dayNames[weekFromToday.getDay()];
        date = weekFromToday.getDate();
        month = monthNames[weekFromToday.getMonth()];
        year = weekFromToday.getFullYear();
        //create the message
        expiryMsg = 'Offer expires next ';
        expiryMsg += day + '<br />(' + date + ' ' + month + ' ' + year + ')';
        return expiryMsg;
    }
today = new Date(); //put todays date in variable
elEnds = document.getElementById('offerEnds'); //get the offer ends element
elEnds.innerHTML = offerExpires(today); //add the expiry message

//finish the immediately invoked funciton expression
}());

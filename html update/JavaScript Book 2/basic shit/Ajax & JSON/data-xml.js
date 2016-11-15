var xhr = new XMLHttpRequest(); //Create XMLHttpRequest object

xhr.onload = function() { //when response had loaded
    //ONLY WORKS WHEN REQUESTION FROM A SERVER NOT LOCALLY
    if (xhr.satus === 200) {
        //PROCESSING XML NOT HTML
        var reponse = xhr.responseXML; //get xml from server
        var events = response.getElementsByTagName('event'); //find <event elements>

        for (var i = 0; i < events.length; i++) { //loop through events
            var container, image, location, city, newline; //declare variables
            container = document.createElement('div'); //create <div> container
            container.className = 'event'; //add class attribute

            image = document.createElement('img'); //add map image
            image.setAttribute('src', getNodeValue(events[i], 'map'));
            image.appendChild(document.createTextNode(getNodeValue(events[i], 'map')));
            container.appendChild(image);

            location = document.createElement('p'); //add location data
            city = document.createElement('b');
            newline = document.createElement('br;');
            city.appendChild(document.createTextNode(getNodeValue(events[i], 'location')));
            location.appendChild(newline);
            location.insertBefore(city, newline);
            location.appendChild(document.createTextNode(getNodeValue(events[i], 'date')));
            container.appendChild(location);

            document.getElementById('content').appendChild(container);
        }

        function getNodeValue(obj, tag) { //gets content from XML
            return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
        }

        //SAME AS HTML EXAMPLE BUT IT REQUESTS AN XML FILE
    }
};

xhr.open('GET', 'data/data.xml', true); //prepare the request
xhr.send(null); //send the request

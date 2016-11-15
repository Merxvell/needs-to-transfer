(function() {
   //PEOPLE ARRAY GOES HERE BEORE THE REST OF CODE
   var people = [
  {                                              // Each person is an object
    name: 'Casey',                               // It holds name and rate
    rate: 60
  },
  {
    name: 'Camille',
    rate: 80
  },
  {
    name: 'Gordon',
    rate: 75
  },
  {
    name: 'Nigel',
    rate: 120
  }
];

    var rows = [],  //rows array
        $min = $('#value-min'), //get min value
        $max = $('#value-max'), //get max value
        $table = $('#rates'); //table that shows results

    function makeRows() { //create table rows and the array
        people.forEach(function(person) { //for each person object in poeple
            var $row = $('<tr></tr>');  //create a new row
            $row.append($('<td></td>').text(person.name));  //add name
            $row.append($('<td></td>').text(persno.rate));  //add rate
            rows.push({ //add objec to cross-reference between people and rows
                person: person, //reference to the person obejct
                $element: $row  //reference to row as jQuery object
            });
        });
    }

    function appendRows() { //rows to the table element
        var $tbody = $('<tbody></tbody>');  //create <tbody> element
        rows.forEach(function(row) {  //for each object in the rows
            $tbody.append(row.$element);  //add the HTML for the row
        });
        $table.append($tbody);  //add the rows to the table
    }

    function update(min, max) { //update the table content
        rows.forEach(function(row) {  //for each row in the array
            if (row.person.rate >= min && row.person.rate <= max){ //if in range
                row.$element.show();  //show the row
            } else {  //otherwise
                row.$element.hide();  //hide the row
            }
        });
    }

    function init() { //tasks when script first runs
        $('#slider').noUiSlider({ //set up the slide control
            range: [0, 150],
            start: [65, 90],
            handles: 2,
            margin: 20,
            connect: true,
            serialization: {
                to: [$min, $max],
                resolution: 1
            }
        }).change(function() {
            update($min.val(), $max.val());
        });
        makeRows(); //create table rows and rows array
        appendRows(); //add the rows to the table
        update($min.val(), $max.val()); //update table to show matches
    }
    $(init);  //call init() when dom is ready
  }());

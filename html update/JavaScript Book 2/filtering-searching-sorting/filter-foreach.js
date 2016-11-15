$(function() {
    //DATA ABOUT PEOPLE GOES HERE
    var people = [{
            name: 'Casey',
            rate: 60
        }, {
            name: 'Camille',
            rate: 80
        }, {
            name: 'Gordon',
            rate: 75
        }, {
            name: 'Nigel',
            rate: 120
        },
    ];

    //FILTERING CODE GOES HERE CREATES A NEW ARRAY CALLED RESULTS
    var results = [];
    people.forEach(function(person){
        if(person.rate >= 65 && person.rate <= 90){
            results.push(person);
        }
    });

    //LOOP THROUGH NEW ARRAY AND ADD MATCHING PEOPLE TO THE RESULTS TABLE
    var $tableBody = $('<tbody></tbody>'); //new content jQuery
    for (var i = 0; i < results.length; i++){    //loop through matches
      var person = results[i];  //store current person
      var $row = $('<tr></tr>');    //create a new row for them
      $row.append($('<td></td>').text(person.name));    //add their name
      $row.append($('<td></td>').text(person.rate));    //add their rate
      $tableBody.append( $row );  //add row to new content
    }

    //add the new content after the body of the page
    $('thread').after($tableBody);  //add tbody after threadgvff  vgvvvvvvvvvvvvvvvvvv
});

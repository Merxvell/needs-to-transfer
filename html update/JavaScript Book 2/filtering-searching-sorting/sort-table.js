var compare = { //declare compare object
    name: function(a, b) { //add a method called name
        a = a.replace(/^the /i, ''); //remove The from start of parameter
        b = b.replace(/^the /i, ''); //remove The from start of parameter

        if (a < b) { //if a < b
            return -1; //return -1
        } else {
            return a > b ? 1 : 0; //if a > b return 1 OR if they're the same return 0
        }
    },
    duration: function(a, b) { //add method caled duration
        a = a.split(':'); //split the time at the colon
        b = b.split(':'); //split the time at the colon

        a = Number(a[0]) * 60 + Number(a[1]); //convert time to seconds
        b = Number(b[0]) * 60 + Number(b[1]); //convert time to seconds

        return a - b;
    },
    date: function(a, b) { //add a date method
        a = new Date(a); //new date object to hold date
        b = new Date(b); //new date object to hold date

        return a - b;
    }
};

$('.sortable').each(function() {
    var $table = $(this); //this sortable table
    var $tbody = $table.find('tbody'); //store table body
    var $controls = $table.find('th'); //store table header
    var rows = $tbody.find('tr').toArray(); //store array containing rows

    $controls.on('click', function() { //when user clicks on a header
        var $header = $(this); //get the header
        var order = $header.data('sort'); //get value of data-sort attribute
        var column; //declare variable called column

        //If selected item has ascending or descending class, reverse contents
        if ($header.is('.ascending') || $header.is('.descending')) {
            $header.toggleClass('ascending descending'); //toggle to other class
            $tbody.append(rows.reverse()); //reverse the array
        } else { //otherwise sort
            $header.addClass('ascending'); //add a class to header
            //Remove asc or desc from all other headers
            $header.siblings().removeClass('ascending descending'); //if compare object has method
            if (compare.hasOwnProperty(order)) { //search for column's index no
                column = $controls.index(this);

                rows.sort(function(a, b) { //call sort() on rows array
                    a = $(a).find('td').eq(column).text(); //get text of column in row a
                    b = $(b).find('td').eq(column).text(); //get text of column in row b
                    return compare[order](a, b); //call compare method
                });

                $tbody.append(rows);
            }
        }
    });
});

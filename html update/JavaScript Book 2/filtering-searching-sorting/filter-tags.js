(function() {
    var $imgs = $('#gallery img'); //store all images
    var $buttons = $('#buttons'); //store buttons element
    var tagged = {}; //create tagged object

    $imgs.each(function() { //loop through images
        var img = this; //store img in variable
        var tags = $(this).data('tags'); //get this element's tag

        if (tags) { //if the element had tags
            tags.split(',').forEach(function(tagName) { //split at comma and
                if (tagged[tagName] == null) { //if object doesn't have tag
                    tagged[tagName] = []; //add empty array to object
                }
                tagged[tagName].push(img); //add image to array
            });
        }
    });

    $('<button />', {   //create empty button
        text: 'Show All',   ///add text 'show all'
        class: 'active',    //make it active
        click: function() { //add onclick handler
            $(this) //get the clicked on button
                .addClass('active') //add the class of active
                .siblings() //get its siblings
                .removeClass('active'); //remove active from them
            $imgs.show();   //show all imagges
        }
    }).appendTo($buttons);  //add to buttons

    $.each(tagged, function(tagName) {  //for each tag name
        $('<button />', {   //create empty button
            text: tagName + ' (' + tagged[tagName].length + ')',    //add tag name
            click: function() { //add click handler
                $(this) //the button clicked on
                    .addClass('active') //make clicked item active
                    .siblings() //get its siblings
                    .removeClass('active'); //remove active from them
                $imgs   //with all the images
                    .hide() //hide them
                    .filter(tagged[tagName])  //find ones with this tag
                    .show();    //show just those images
            }
        }).appendTo($buttons);  //add to the buttons
    });
}());

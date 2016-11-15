var request; //latest image to be requested
var $current; //Image currently being shown
var cache = {}; //Cache objectade it out
var $frame = $('#photo-viewer'); //container for image
var $thumbs = $('.thumb'); //container for image

function crossfade($img) { //Function to fade between images
    //pass in new image as parameter
    if ($current) { //if there is currently an image showing
        $current.stop().fadeOut('slow'); //stop animation and fade it out
    }

    $img.css({ //set the CSS margins for the image
        marginLeft: -$img.width() / 2, //negative margin of half image's width
        marginTop: -$img.height() / 2 //negative margin of half image's height
    });

    $img.stop().fadeTo('slow', 1); //stop animation on new image & fade in
    $current = $img; //new image becomes current image
}

$(document).on('click', '.thumb', function(e) {  //when a thumb is clicked on
    var $img;   //create local variable called $img
    var src = this.href; //store path to image
    request = src; //sore path again in request

    e.preventDefault(); //stop default link behavior

    $thumbs.removeClass('active'); //remove active from all thumbs
    $(this).addClass('active'); //add active to clicked thumb

    if (cache.hasOwnProperty(src)) {    //if cache contains this image
        if (cache[src].isLoading === false) { //and if isLoading is false
            crossfade(cache[src].$img); //call crossfade() function
        }
    } else {    //otherwise it is not in cache
        $img = $('<img />'); //store empty <img/> element in $img
        cache[src] = {  //store this image in cache
            $img: $img, //add the path to the image
            isLoading: true //set isLoading property to true
        };

        //Next few lines will run when image has loaded but are prepared first
        $img.on('load', function() {    //when image has loaded
            $img.hide();    //hide it
            //Remove is-loadig class from frame & apend new image to it
            $frame.removeClass('is-loading').append($img);
            cache[src].isLoading = false;   //update isLoading in cache
            //if still most recently requested image then
            if (request === src) {
                crossfade($img);    //update isLoading in cache
            }
        });

        $frame.addClass('is-loading');  //add is-loading class to frame

        $img.attr({ //set attributes on <img> element
            'src': src, //add src attribute to load image
            'alt': this.title || '' //add title if one was given in linke
        });
    }
});
//last line runs once (when rest of script has loaded) to show the first image
$('.thumb').eq(0).click(); //simulate click on first thumbnail

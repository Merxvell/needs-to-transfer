console.log('And we\'re off...'); //indicates script is running
var $form, width, height, area;
$form = $('#calculator');

$('form input[type="text"]').on('blur', function(){ //when input loses focus
  console.log('You entered ', this.value); //write value to console
});

$('#calculator').on('submit', function(e){ //when the user clicks submit
  e.preventDefault(); //prevent form from sumitting
  console.log('Clicked submit...'); //log that submit was clicked

  width = $('#width').val(); //write width to console
  console.log('Width ' + width);

  height = $('#height').val(); //write height to console
  console.log('Height', height);

  area = width * height; //write area to console
  console.log(area);

  $form.append('<p>' + area + '</p>');
});

var $form = $('#calculator');

$form.on('submit', function(e){  //runs when submit is pressed
  e.preventDefault();
  console.log('Clicked submit...'); //show button was clicked

  var width, height, area;
  width = $('#width').val();
  height = $('#height').val();
  area = width * height;

  console.group('Area calculations'); //start group
  console.info('Width ', width); //write width
  console.info('height ', height); //write height
  console.log(area); //write area

  console.groupEnd(); //end group
  $form.append('<p>' + area + '</p>');
});

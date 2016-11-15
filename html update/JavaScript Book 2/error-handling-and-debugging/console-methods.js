console.info('And we\'re off...'); //info: script is running

var $form, width, height, area;
$form = $('#calculator');

$('form input[type="text"]').on('blur', function(){ //on blur event
  console.warn('You entered ', this.value); //warn: what was entered
});

$('#calculator').on('submit', function(e){ //when form is submitted
  e.preventDefault();

  width = $('#width').val();
  height = $('#height').val();

  area = width * height;
  console.error(area);  //error: show area

  $form.append('<p class="result">' + area + '</p>');
});

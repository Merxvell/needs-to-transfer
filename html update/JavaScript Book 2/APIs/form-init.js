$(function(){
  $('#arrival').datepicker(); //turn input to jqui datepicker

  var $amount = $('#amount'); //cache the price input
  var $range = $('#price-range'); //cache the <div> for price range

  $('#price-range').slider({ //turn price-range input into a slider
    range: true, //if it is a range it gets two handles
    min: 0, //minimum value
    max: 400, //maximum value
    values: [175,300], //values to use when the page loads
    slide: function(event, ui){ //when slider used update amount element
      $amount.val('$' + ui.values[0] + '-$' + ui.values[1]);
    }
  });

//Set initial values of amount element
  //A sign then lower range
  //A $ sign then higher range
  $amount.val('$' + $range.slider('values', 0) + '- $' + $range.slider('values', 1));
});

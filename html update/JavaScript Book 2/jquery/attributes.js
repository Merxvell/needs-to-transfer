$(function(){
  $('li#three').removeClass('hot'); //remove class from li with id 3
  $('li.hot').addClass('favorite'); //add class favorite with classes with class hot
  $('ul').attr('id','group'); //add group id to ul
});

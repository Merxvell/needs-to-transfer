$(function(){
  $('li').on('click', function(e){
    $('li span').remove(); //removes any span element at start
    var date = new Date(); //get the date
    //date.setTime(e.timeStamp);
    var clicked = date.toDateString(); //convert the date to string on a click
    //add the date to the li element this = li
    $(this).append(' <span class = "date">' + clicked + ' ' + e.type + '</span>');
  });
});

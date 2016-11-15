$(function (){
  var listItem, itemStatus, eventType;

  $('ul').on(
    'click mouseover',
    ':not(#four)', //not applied to id four
    {status: 'important'},
    function(e){
      listItem = 'Item: ' + e.target.textContent + '<br />';
      itemStatus = 'Status: ' + e.data.status + '<br />';
      eventType = 'Event: ' + e.type;
      $('#notes').html(listItem + itemStatus + eventType); //make a notes element with an id of notes
    }
  );
});

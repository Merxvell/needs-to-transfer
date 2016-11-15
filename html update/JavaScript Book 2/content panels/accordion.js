$(".accordion").on('click', '.accordion-control', function(e){ //when clicked
  e.preventDefault(); //prevent load action
  $(this) //get element the user clicked on
    .next('.accordion-panel') //select following panel
    .not(':animated') //if not currently animating
    .slideToggle(); //slide toggle to show or hide it
});

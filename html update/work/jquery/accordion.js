$(".accordion").on('click', '.accordion-control', function(e){ //when clicked
  e.preventDefault(); //prevent load action
  $(this) 
    .next('.accordion-panel') 
    .not(':animated') 
    .slideToggle(); 
});
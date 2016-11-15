$(function(){
  var $window = $(window); //cache window
  var $slideAd = $('#slideAd'); //cache ad
  var endZone = $('#footer').offset().top - $window.height() - 500; //calc endzone

  $window.on('scroll', function(){ //scroll event triggers an anonymous function

    if( (endZone) < $window.scrollTop()){ //conditionl statement that checks pos
      $slideAd.animate({'right':'0px'}, 250); //true = ad
    }else{
      $slideAd.stop(true).animate({'right': '-360px'}, 250); //false is = no ad
    }
  });
});

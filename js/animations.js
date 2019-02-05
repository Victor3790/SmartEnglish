$(document).ready(function(){

  var zeroScroll = $('#hero').outerHeight();
  var topButton = $('#top');
  var extraScroll = $('#fixed').outerHeight();
  var mapScreen = $('.fullScreenMap');

  if($(window).width() <= 575){
    var menuLinks = $("a[id*='Small']");
  }else{
    var menuLinks = $("a[id*='Link']");
  }

  //Responsive menu
  $('#smallMenuIcon').click(function(){
    var smallMenu = $('.smallMenu');

    if(smallMenu.css('width') === '0px'){
      smallMenu.css('height','100vh');
      smallMenu.animate({
        width: '40%'
      }, 150);
    }else{
      smallMenu.animate({
        width: '0'
      }, 150, function(){
        smallMenu.css('height','0');
      });
    }
  });

  //Smooth scrolling.
  menuLinks.click(function(e){
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top - (extraScroll - 30)
    }, 1100);

  });

  topButton.click(function(e){
    e.preventDefault();

    $('body,html').animate({
      scrollTop: 0
    }, 1100);
  });

  //Active link switching

  $(window).scroll(function(){

    var scrollLocation = $(this).scrollTop();

    if(zeroScroll <= scrollLocation){
      topButton.show('slow');
    }

    menuLinks.each(function(){
      var sectionOffset = $(this.hash).offset().top - extraScroll;

      if(sectionOffset <= scrollLocation){
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }else if(scrollLocation <= zeroScroll){
        $(this).parent().siblings().removeClass('active');
        topButton.hide('slow');
      }
    });

  });

  //Initialize the map
  function initMap() {
    var SmartEnglish = {lat: 19.507379, lng: -98.881107};
    var map = new google.maps.Map(document.getElementById('showMap'), {
      center: SmartEnglish,
      zoom: 18
    });

    var marker = new google.maps.Marker({
      position: SmartEnglish,
      map: map,
      label: 'Smart English Texcoco.',
      draggable: true,
      animation: google.maps.Animation.DROP
    });
  }

  //Show the map
  $('#mapButton').click(function(){
    initMap();
    mapScreen.animate({
      height: '100vh'
    },1000, function(){
      $('#close').show('slow');
    });
  });

  //Close the map
  $('#close').click(function(){
    $('#close').hide('slow');
    mapScreen.animate({
      height: 0
    }, 1000);
  });

});

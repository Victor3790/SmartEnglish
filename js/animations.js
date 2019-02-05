$(document).ready(function(){

  var zeroScroll = $('#hero').outerHeight();
  var topButton = $('#top');

  if($(window).width() <= 575){
    var menuLinks = $("a[id*='Small']");
    var extraScroll = $('#fixed').outerHeight() - $('.smallMenu').outerHeight();
  }else{
    var menuLinks = $("a[id*='Link']");
    var extraScroll = $('#fixed').outerHeight();
  }

  //Responsive menu
  $('#smallMenuIcon').click(function(){
    var smallMenu = $('.smallMenu');

    if(smallMenu.css('width') === '0px'){
      smallMenu.animate({
        width: '40%'
      }, 150);
    }else{
      smallMenu.animate({
        width: '0'
      }, 150);
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

});

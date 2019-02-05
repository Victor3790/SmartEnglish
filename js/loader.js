$(document).ready(function(){
  //Load font
  WebFontConfig = {
    google: { families: [ 'Roboto+Condensed:400,700'] } };
    (function() {
      var wf = document.createElement('script');
      wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
      wf.type = 'text/javascript';
      wf.async = 'true';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(wf, s);
    })();

    //Load Google Analytics
    (function(){
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'UA-116551244-1');
    })();

    //Avoid error when clicking on phone link
    $('.phone').click(function(){
      return (navigator.userAgent.match(/Android|iPhone|iPad|iPod|Mobile/i))!=null;
    });

});

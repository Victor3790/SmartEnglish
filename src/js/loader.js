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
    /*(function(){
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'UA-116551244-1');
    })();*/

    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-116551244-1', 'auto');
    ga('send', 'pageview');

    //Avoid error when clicking on phone link
    $('.phone').click(function(){
      return (navigator.userAgent.match(/Android|iPhone|iPad|iPod|Mobile/i))!=null;
    });

});

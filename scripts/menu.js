$(document).ready(function() {
  $("#toggle").click(function() {
    $("#navcont").toggleClass("onoff");
    $('.bar').toggleClass('animate');
    $("#navtabs").toggleClass("fade");
  });

  $("#navcont").click(function() {
    $("#navcont").toggleClass("onoff");
    $('.bar').toggleClass('animate');
    $("#navtabs").toggleClass("fade");
  });
});
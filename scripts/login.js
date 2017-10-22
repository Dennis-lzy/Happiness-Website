$("#profilenav").click(function(){

  $("#modal-container").fadeIn(400);
  $("#overlay-toggle").fadeIn(300);
  console.log($("#modal-container").css("display"))
});


$("#overlay-toggle").click(function(){
   $("#modal-container").fadeOut(400);
  $("#overlay-toggle").fadeOut(300);
});


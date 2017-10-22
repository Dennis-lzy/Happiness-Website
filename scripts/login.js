$("#profilenav").click(function(){

  $("#modal-container").fadeIn(400);
  $("#overlay-toggle").fadeIn(300);
  console.log($("#modal-container").css("display"))
});


$("#overlay-toggle").click(function(){
   $("#modal-container").fadeOut(400);
  $("#overlay-toggle").fadeOut(300);
});

$(".loginmodal-submit").click(function() {
    var usernameL = $("#login-username").val();
    console.log(usernameL);
    var passL = $("#login-pass").val();
    console.log(passL);
    if(usernameL == user.Username && passL == user.Password){
    	$("#login-modal h1").css("margin", "150px");
    	$("#loginmodal").html("<h1>Login Successful</h1>");
    	console.log("Login1");
    	$("#profilenav").html(user.FirstName);
    	console.log("Login2");
    }
});
var user = JSON.parse(localStorage.getItem('user'));
var content = [
    "https://thehappinesstrap.com/7-ways-change-behaviour-for-good/",
    "https://www.youtube.com/embed/93LFNtcR1Ok",
    "https://www.youtube.com/embed/eiPxLpYlw4I",
    "Content1.html",
    "https://www.youtube.com/embed/tQ5vx84DQUU",
    "https://www.youtube.com/embed/4q1dgn_C0AU",
    "https://www.youtube.com/embed/IIWQeMFncm8",
    "https://www.youtube.com/embed/GlK1A5h8i10"
];
localStorage.setItem("content", JSON.stringify(content));

var userLogged = sessionStorage.getItem("userLogged");
if (userLogged) {
    $("#profilenav").html("<a href=\"Profile.html\"></a>");
    $("#profilenav a").html(user.FirstName);
}

$("#profilenav").click(function() {

    $("#modal-container").fadeIn(400);
    $("#overlay-toggle").fadeIn(300);
    console.log($("#modal-container").css("display"))
});


$("#overlay-toggle").click(function() {
    $("#modal-container").fadeOut(400);
    $("#overlay-toggle").fadeOut(300);
});

$(".loginmodal-submit").click(function() {
    var usernameL = $("#login-username").val();
    console.log("login:" + usernameL);
    console.log("real:" + user.Username);
    console.log(usernameL === user.Username);
    var passL = $("#login-pass").val();
    console.log("loginP:" + passL);
    console.log("realP:" + user.Password);
    console.log(passL === user.Password);
    if (usernameL == user.Username && passL == user.Password) {
        $("#login-modal h1").css("margin", "150px");
        $("#login-modal").html("<h1 style=\"margin-top:150px\">Login Successful</h1>");
        console.log("Login1");
        $("#profilenav").html("<a href=\"Profile.html\"></a>");
        $("#profilenav a").html(user.FirstName);
        console.log("Login2");
        userLogged = true;
        sessionStorage.setItem("userLogged", userLogged)
    }
});
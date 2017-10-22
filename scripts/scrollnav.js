window.onscroll = function() {scrollNavFunction()};

function changeNavItems(px) {
  var x = document.querySelectorAll(".navitemsA");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.paddingTop = px;
    }
}

function scrollNavFunction() {
  $(".fade").css("transition","0.3s")
  $(".onoff").css("transition","0.3s")
  $("#navtabs").css("transition","0.3s")
  $("#navcont").css("transition","0.3s")
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  if(w > 1000){
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  $("#navcont").css("marginTop", "0px");
  $("#nav").css("backgroundColor", "#9DA8C9");
  $("#nav").css("height", "3.91vw");
 
  $("toggle").css("marginTop", "6.5px");

  } else {
    $("#navcont").css("marginTop", "50px");
    $("#nav").css("backgroundColor", "#ffffff");
    $("#nav").css("height", "7.81vw");
   
   document.getElementById("toggle").style.marginTop = "54px";
  }
} else {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  document.getElementById("navcont").style.marginTop = "0px";
  document.getElementById("nav").style.backgroundColor = "#9DA8C9";
  document.getElementById("nav").style.height = "39.09px";
  changeNavItems("20px");

   document.getElementById("toggle").style.marginTop = "6.5px"

  } else {
    document.getElementById("navcont").style.marginTop = "50px";
    document.getElementById("nav").style.backgroundColor = "#ffffff";
    document.getElementById("nav").style.height = "78.1px";
   changeNavItems("10px");
   document.getElementById("toggle").style.marginTop = "54px";
  } 
}
}

//lets me access user details, too lazy to add new script to every page
var user = JSON.parse(localStorage.getItem('user'));
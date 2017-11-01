var user = JSON.parse(localStorage.getItem('user'));
var faved=[]
localStorage.setItem("faved",JSON.stringify(faved));	
var faved = JSON.parse(localStorage.getItem('faved'));
var content = JSON.parse(localStorage.getItem('content'));
console.log(content);
var contentPool = content;
var userLogged = sessionStorage.getItem("userLogged");

$(loadContent);

function loadContent() {	
	$(".content-box").each(function(){
		console.log(contentPool.length);
		var x = Math.floor(Math.random() * contentPool.length-1)+1;
		$(this).find(".content-link").attr("href", contentPool[x]);
		$(this).find(".content-preview").attr("src", contentPool[x]);
		console.log(contentPool[x]);
		console.log(x);
		contentPool.splice(x,1);
	});
}


$(".favourite-btn").click(function(){
	if(userLogged){
	faved = JSON.parse(localStorage.getItem('faved'));;
	console.log(faved);
	var btnClass = $(this).attr("class")
	var favurl = $(this).parent().parent().find(".content-link").attr("href");
	console.log(favurl);
	if(btnClass === "favourite-btn") {
		$(this).removeClass("favourite-btn").addClass("btn-clicked");
	} else {
		$(this).removeClass("btn-clicked").addClass("favourite-btn");
	}
	console.log("cond1")
	faved.push(favurl);
	localStorage.setItem("faved",JSON.stringify(faved))
}
 else {
  $("#modal-container").fadeIn(400);
  $("#overlay-toggle").fadeIn(300);
  console.log($("#modal-container").css("display"))

  $("#login-remind").html("Please Sign up or Login to your account to favourite posts")
}
});
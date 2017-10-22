$(fourPanelSplit());

 function fourPanelSplit() {
  //restarts the screen to 4 images
  $(".restart").click(function(){
   div(document.getElementById("screen"));
});
  var randnum = Math.floor(Math.random() * 3);
	img = function img (el,x,y) {
		var d = document.createElement("div");
		d.className     = "frame";
		d.style.left    = 49.9 * x + "%";
		d.style.top     = 50 * y + "%";
		var img         = document.createElement("img");
		img.className   = "img";
		img.src         = $("#screenimg").attr("src");
		img.onmousedown = function () {
			div(this.parentNode);
			this.parentNode.removeChild(this);
		}
		d.appendChild(img);
		el.appendChild(d);
	},
	div = function div (el) {
		img(el,0,0);
		img(el,1,0);
		img(el,0,1);
		img(el,1,1);
	};
	div(document.getElementById("screen")); 
  
   $( ".submit" ).click(function() {
    var newURL = $(this).closest("form").find("input[name='imgURL']").val();
$("#screenimg").attr("src", newURL);
div(document.getElementById("screen"));
  console.log(newURL);
    return false;
}); 
}; 
  
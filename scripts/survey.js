/* slider */
var slider1 = document.getElementById("q1");
var slider2 = document.getElementById("q2");
var slider3 = document.getElementById("q3");
var slider4 = document.getElementById("q4");
var output1 = document.getElementById("val1");
var output2 = document.getElementById("val2");
var output3 = document.getElementById("val3");
var output4 = document.getElementById("val4");
output1.innerHTML = Math.floor(slider1.value/10);
output2.innerHTML = Math.floor(slider2.value/10);
output3.innerHTML = Math.floor(slider3.value/10);
output4.innerHTML = Math.floor(slider4.value/10);
var a = Math.floor(slider1.value/10);
var b = Math.floor(slider2.value/10);
var c = Math.floor(slider3.value/10);
var d = Math.floor(slider4.value/10);



slider1.oninput = function() {
  var x = Math.floor(this.value/10);
  output1.innerHTML = x;
  a = x
  }

slider2.oninput = function() {
    var x = Math.floor(this.value/10);
  output2.innerHTML = x;
  b=x
}
slider3.oninput = function() {
    var x = Math.floor(this.value/10);
  output3.innerHTML = x;
  c=x
}
slider4.oninput = function() {
    var x = Math.floor(this.value/10);
  output4.innerHTML = x;
  d=x
}

var finalscore = (a+b+c+d)  ;
console.log("the final score is" + finalscore);

function calc() {
  var finalscore = (a+b+c+d)/4;
    document.getElementById("score").innerHTML = finalscore;
}

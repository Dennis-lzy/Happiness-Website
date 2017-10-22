$(dragOverlay);
var cardPos = parseFloat($(".card-overlay").css("left"));
var snapTol = 0.50*(parseFloat($(".card-overlay").css("width"))); //sets the snap tolerance to be responsive



//uses jqueary ui to allow dragging of elements
function dragOverlay(){
  $(".card-overlay").draggable({
    axis:"x",
    containment:"parent",
    snapMode: "inner",
    snap:"#container",
    snapTolerance: snapTol
  });
}

console.log(cardPos); //just testing, can ignore



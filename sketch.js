
function preload(){
  var blue =sea.png

}


function setup(){
  createCanvas(400,400);
  
}

function draw() {
  background("blue");
  blue.velocityX=2
 if(blue.x<0)
 {
   blue.x=blue.width/2
 }

 
}
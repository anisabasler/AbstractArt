var linex
var linesize
var wow

function setup() {
  createCanvas(400, 400);
}
 
function draw() {
  background(255, 96, 64);
//   yellow triangle
  fill (234, 255, 77)
  triangle(60, 75, 100, 20, 100, 180);
  triangle(205, 85, 160, 20, 150, 180);
//   Blue rectangle 
  fill(77, 83, 255)
  rect(90, 50, 90, 100, 45);
  
  //billie eyes
 fill(255,255,255);
  ellipse(115,80,40,30);
//   built in variable width/height 
ellipse(width/2, height/2, 60,60); 
ellipse(width/1.4, height/2, 60,60); 


  ellipse(155,80,40,30);
  fill(0,0,0)
  ellipse(115,80,25,17);
  ellipse(155,80,20,5);
  
  linex = 100;
  linesize = 300;
stroke(200);
line(linex, 150, 85, linesize);
stroke(255);
line(linex, 300, 30, linesize);
//   right leg 
  stroke(400);
line(150, 150, 100, linesize);
stroke(255);
line(150, 300, 40,linesize);
  lips = random (20,50);
  fill (250, 170, 207)
arc(140, 120, lips, 30, 25, PI + QUARTER_PI, PIE);

//   billies gf 

// car
ellipse(mouseX, 400, 90, 100);

//   pink triangle 
fill (221, 0, 255)
quad(350, 201, 200, 120, 150, 200, 210, 196);
  fill(255,255,255)
  ellipse(210,150,45,35);
  fill(104, 219, 83)
  ellipse(210,150,35,25);
  fill(0,0,0)
  ellipse(210,150,15,10);


 


}
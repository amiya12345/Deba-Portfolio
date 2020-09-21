  
var canvas;


function windowResized(){
	resizeCanvas(windowWidth,windowHeight);
}
function setup()
{
	canvas = createCanvas(windowWidth,windowHeight);
	canvas.position(0,0);
	canvas.style('z-index','-1');

	
	
	
}
function draw() {
	fill(random(255), random(250), 255, random(0,150));
	noStroke();
	ellipse(mouseX + random(-80, 80), mouseY+ random(-50, 50), random(1, 50));
	square(mouseX+ random(-50, 50), mouseY+ random(-30, 30), 20)
	triangle(mouseX+random(30), mouseY+ random(30), mouseX+random(30), mouseY+random(30), mouseX+random(30), mouseY+random(30));
}
let grid = "undefined";
let stroke1 = prompt("enter a basic color name in lowercase" , "black");
let stroke2 = prompt("enter another basic color name in lowercase" , "blue");

function setup () {
    createCanvas(1000, 800)
    background("ccc");

}
function draw() {
    //background(grid);
    background(18, 11, 84);
    // snowman bottom
    fill("#f1f1f1");
    strokeWeight(20);
    stroke(stroke1);
    // body bottom
    ellipse(500, 450, 500);
    // hand left
    ellipse(275, 400, 100);
  // hand right
    ellipse(725, 400, 100);
    // head
    ellipse(500, 200, 200);
    // hat brim
    stroke(stroke2);
    strokeWeight(20);
    line(380, 120, 620, 120);
    // hat body
    stroke(stroke2);
    quad(425, 50, 575, 50, 575, 120, 425, 120);
    // eyes
    stroke(0);
    strokeWeight(30);
    point(500, 220);
    point(450, 200);
    point(550, 200);
    point (500,400);
    point (500,500);
    // mouth
    noFill();
    strokeWeight(10);
    arc(500, 220, 80, 80, 120, HALF_PI);
  // snow
  stroke("#f1f1f1");
  strokeWeight(30);
  point(100, 100);
  point(200, 300);
  point(50, 600);
  point(800, 80);
  point(900, 500);
  // ground
  fill("#f1f1f1");
  stroke(255);
  bezier(0, 650, 300, 700, 450, 600, 1000, 700);

}
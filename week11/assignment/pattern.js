function setup() {
  createCanvas(600, 600);
}
function createTile(originX, originY, primaryColor, secondaryColor) {
  translate(originX, originY);
  fill(primaryColor);
  rect(0, 0, 200, 200);
  stroke('orange');
  strokeWeight(1);
  line(10, 0, 10, 200);
  line(190, 0, 190, 200);
  line(0, 190, 200, 190);
  line(0, 10, 200, 10);
  
  line(25, 0, 50, 200);
  line(150, 0, 85, 200);
  line(0, 85, 200, 150);
  line(0, 25, 200, 50);

  fill(secondaryColor);
  rect(135, 135, 135, 135);
  rect(50, 50, 50, 50);
  square(20, 20, 50);
  square(150, 150, 150)
  line(100, 100, 180, 180);
}
function draw () {
if (mouseIsPressed) {
  createTile(0, 0, 'gold', 'white');
  createTile(0, 200, 'white', 'gold');
  createTile(0, 200, 'gold', 'white');
  createTile(200, -400, 'white', 'gold');
  createTile(0, 200, 'gold', 'white');
  createTile(0, 200, 'white', 'gold');
  createTile(200, -400, 'gold', 'white');
  createTile(0, 200, 'white', 'gold');
  createTile(0, 200, 'gold', 'white');
}
else {
  createTile(0, 0, 'white', 'gold');
  createTile(0, 200, 'gold', 'white');
  createTile(0, 200, 'white', 'gold');
  createTile(200, -400, 'gold', 'white');
  createTile(0, 200, 'white', 'gold');
  createTile(0, 200, 'gold', 'white');
  createTile(200, -400, 'white', 'gold');
  createTile(0, 200, 'gold', 'white');
  createTile(0, 200, 'white', 'gold');
}
}

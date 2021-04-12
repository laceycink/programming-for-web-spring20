let y;
let x;
let num = 100;
function setup() {
  createCanvas(displayHeight, displayWidth);
  background(156, 96, 135);
  noStroke();
}

function draw() {
  fill(227, 127, 204);
  y = 250;
  for (let i = 0; i < num / 2; i++) {
    rect(25, y, 335, 2);
    y += 10;
  }
  fill(158, 14, 67);
  y = 300;
  for (let i = 0; i < num / 2; i++) {
    rect(200, y, 125, 5);
    y += 35;
  }
  fill(42, 32, 79);
  y = 10;
  for (let i = 0; i < num / 2; i++) {
    rect(230, y, 400, 2);
    y += 10;
  }
   fill(179, 127, 227);
  y = 100;
  for (let i = 0; i < num / 2; i++) {
    rect(275, y, 550, 5);
    y += 40;
  }
}
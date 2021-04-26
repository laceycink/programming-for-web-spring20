var slider, slider2;
var pos, pos2;

function setup() {
  createCanvas(550, 550);
  angleMode(DEGREES);
  slider = createSlider(1, 35, 1);
  slider2 = createSlider(1, 35, 1);
  pos = 1.0;
  pos2 = 0.5;
}

function draw() {
  circle (100, 225, 2);
  fill ('turquoise');
  clear();
  noStroke();
  colorMode(HSB, 200);
  for (let i = 10; i < 100; i++) {
  for (let j = 10; j < 100; j++) {
    stroke(i, j, 100);
    point(i, j);
    }
    }
  background('black');
  translate(width / 2, height / 2);
  var mySinVal = sin(pos);
  var mySinVal2 = sin(pos2);

  amplified = mySinVal * 100;
  amplified2 = mySinVal2 * 80;

  for (x = 120; x <= 550; x = x + 2) {
    curve(0, 20, amplified, 20, amplified2, 200, 15, 500);
    rotate(5);
  }
  pos = pos + slider.value()
  pos2 = pos2 + slider2.value()
};
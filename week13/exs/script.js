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
  clear();
  noStroke();
  colorMode(HSB, 500);
  for (let i = 10; i < 100; i++) {
  for (let j = 10; j < 100; j++) {
    stroke(i, j, 400);
    point(i, j);
    }
    }
  background('skyblue');
  translate(width / 2, height / 2);
  var mySinVal = sin(pos);
  var mySinVal2 = sin(pos2);

  amplified = mySinVal * 10;
  amplified2 = mySinVal2 * 15;

  for (x = 45; x <= 550; x = x + 25) {
    curve(5, 100, amplified, 300, amplified2, 15, 100, 5000);
    rotate(5);
  }
  pos = pos + slider.value()
  pos2 = pos2 + slider2.value()
};



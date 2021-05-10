var slider, slider2;
var pos, pos2;

function setup() {
    createCanvas(600, 600);
    angleMode(DEGREES);
    slider = createSlider(1, 35, 1);
    slider2 = createSlider(1, 35, 1);
    pos = 0.5;
    pos2 = 0.5;
}

function createTile(originX, originY, primaryColor, secondaryColor) {
    translate(originX, originY);
    fill(primaryColor);
    rect(0, 0, 200, 200);
    stroke('navy');
    strokeWeight(1);
    line(10, 0, 10, 200);
    line(190, 0, 190, 200);
    line(0, 190, 200, 190);
    line(0, 10, 200, 10);

    fill(secondaryColor);
    square(15, 15, 60);
    square(125, 15, 60);
    square(15, 125, 60);
    square(125, 125, 60);
    circle(10, 10, 10);
    circle(190, 190, 10);
    circle(10, 190, 10);
    circle(190, 10, 10);
    circle(100, 100, 100);

    square(175, 75, 50);
    square(-25, 75, 50);
    square(75, 175, 50);
    square(75, -25, 50);

    fill(primaryColor);
    circle(120, 100, 40);
    circle(100, 80, 40);
    circle(80, 100, 40);
    circle(100, 120, 40);
    circle(45, 45, 10);
    circle(155, 45, 10);
    circle(45, 155, 10);
    circle(155, 155, 10);

    fill(secondaryColor);
    circle(90, 100, 20);
    circle(100, 90, 20);
    circle(100, 110, 20);
    circle(110, 100, 20);

    fill(primaryColor);
    circle(100, 100, 10);
  }

  function draw () {
  if (mouseIsPressed) {
    createTile(0, 0, 'SteelBlue', 'wheat');
    createTile(0, 200, 'wheat', 'SteelBlue');
    createTile(0, 200, 'SteelBlue', 'wheat');
    createTile(200, -400, 'wheat', 'SteelBlue');
    createTile(0, 200, 'SteelBlue', 'wheat');
    createTile(0, 200, 'wheat', 'SteelBlue');
    createTile(200, -400, 'SteelBlue', 'wheat');
    createTile(0, 200, 'wheat', 'SteelBlue');
    createTile(0, 200, 'SteelBlue', 'wheat');
  }
  else {
    createTile(0, 0, 'wheat', 'SteelBlue');
    createTile(0, 200, 'SteelBlue', 'wheat');
    createTile(0, 200, 'wheat', 'SteelBlue');
    createTile(200, -400, 'SteelBlue', 'wheat');
    createTile(0, 200, 'wheat', 'SteelBlue');
    createTile(0, 200, 'SteelBlue', 'wheat');
    createTile(200, -400, 'wheat', 'SteelBlue');
    createTile(0, 200, 'SteelBlue', 'wheat');
    createTile(0, 200, 'wheat', 'SteelBlue');
    }

    translate(width / 3, height / 2);
    var mySinVal = sin(pos);
    var mySinVal2 = sin(pos2);

    amplified = mySinVal * 100;
    amplified2 = mySinVal2 * 100;

    for (x = 120; x <= 400; x = x + 1) {
    curve(0, 10, amplified, 10, amplified2, 300, 15, 200);
    rotate(5);
    }
    pos = pos + slider.value()
    pos2 = pos2 + slider2.value()
}
function setup() {
    createCanvas(200, 200);
}
function createTile() {
    translate(0, 0);
    fill('red');
    rect(0, 0, 200, 200);
    stroke('white');
    strokeWeight(2);
    line(10, 0, 10, 200);
    line(190, 0, 190, 200);
    line(0, 190, 200, 190);
    line(0, 10, 200, 10);
    
    line(50, 0, 50, 200);
    line(150, 0, 150, 200);
    line(0, 150, 200, 150);
    line(0, 50, 200, 50);

    fill(0);
    rect(10, 10, 10, 10);
    rect(50, 50, 50, 50);
    square(100, 100, 50);
    square(180, 180, 10)

    line(20, 20, 180, 180);
}

function draw() {
    createTile();
}
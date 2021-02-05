function setup() {
    createCanvas(600, 600);
}
function createTile(originX, originY, primaryColor, secondaryColor) {
    translate(originX, originY);
    fill(primaryColor);
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

    fill(secondaryColor);
    rect(10, 10, 10, 10);
    rect(50, 50, 50, 50);
    square(100, 100, 50);
    square(180, 180, 10)

    line(20, 20, 180, 180);
}
function draw () {
    createTile(0, 0, 'red', 'black');
    createTile(0, 200, 'black', 'red');
    createTile(0, 200, 'red', 'black');
    createTile(200, -400, 'black', 'red');
    createTile(0, 200, 'red', 'black');
    createTile(0, 200, 'black', 'red');
    createTile(200, -400, 'red', 'black');
    createTile(0, 200, 'black', 'red');
    createTile(0, 200, 'red', 'black');
}
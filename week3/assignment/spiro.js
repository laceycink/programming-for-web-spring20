let rotateBy = 10;
function setup() {
    createCanvas(600, 600);
    background(0);
    angleMode(DEGREES);
}

function makeArm(rotateBy) {
    let alt = Math.round(rotateBy / 360);
    console.log(alt);
    noFill(); 
    colorMode(RGB, 100);
    for (let i = 0; i < 100; i++) {
        for (let j = 0; j < 100; j++) {
            stroke(i, j, 0);
            point(i, j);
        }
    }
    circle (150, 150, 150);
    circle (150, 150, 130);
    circle (150, 150, 110);
    square (150, 150, 100);
    square (130, 130, 80);
    line(20, 20, 140, 140);
    line(40, 40, 140, 140);
}

function draw() {  
    translate(300, 300);
    rotate(rotateBy);
    makeArm(rotateBy);
    rotateBy += 10;
}

function mousePressed() {
    noLoop();
}
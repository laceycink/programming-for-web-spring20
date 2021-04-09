function setup() {
    createCanvas (600, 600);
    background (52, 164, 235);
}

function draw() {
    strokeWeight(0.25);
    noFill();
    stroke(211, 235, 52);
    for (let mouseX = 0; mouseX <= 1; mouseX++) {
    square(mouseX,mouseY, pmouseX, pmouseY);
    }

    for (let squareY = 20; squareY <= 900; squareY += 25) {
        for (let squareX = 75; squareX <= 900; squareX += 25) {
          square(squareX, squareY, 45);
        }
      }
}  

for (x =0; x<= 10; x = x + 1) {
    val = x + 10
}
console.log(val)
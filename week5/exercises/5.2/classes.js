let bubble1;
let bubble2;

function setup() {
    createCanvas(600, 400);
    bubble1 = new Bubble();
    bubble2 = new Bubble();
}

function draw() {
    background(0);
    bubble1.move();
    bubble1.show();
    bubble2.move();
    bubble2.show();
}

class Bubble { 
    contructor() {
      this.x = 100;
      this.y = 85;
      }

      move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
      }

      show() {
          stroke(255);
          strokeWeight(4);
          noFill();
          ellipse(this.x, this.y, 50, 24);
      }
  } 
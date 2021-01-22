function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    if (mouseIsPressed) {
      fill(0, 126, 255);
    } else {
      fill(0, 200, 200);
    }
    quad(mouseX, mouseY, 38, 31, 86, 20, 69, 63,);
  ;
  }  
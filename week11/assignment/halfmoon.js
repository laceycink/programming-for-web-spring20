function setup() {
    createCanvas(displayWidth, displayHeight);
    background(252, 186, 3);
    strokeWeight(0.5);
    stroke(217, 98, 24)
    fill(245, 143, 10); 
  }
  
  function draw() {
    shearX(PI / 10.0);
    shearY(PI / 10.0);
    arc(mouseX, mouseY, 100, 35, 0, PI + QUARTER_PI, PIE); 
   }  
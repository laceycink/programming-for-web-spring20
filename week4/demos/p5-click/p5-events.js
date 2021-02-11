const circleDiameter = 100;
//let circleX = 200;
//let circleY = 300;
let startingX = 200;
let startingY = 300;
let myCircle = [];
let startingId = 0;

function setup () {
    createCanvas(1000, 500);
    background (0);
    //ellipse: (circleX, circleY, circlrDiameter);
    //rect(100, 100, 200, 200);
    for (let k = 0; k < 2; k++) {
    for (let i =0; i < 4; i++) {
        ellipse(startingX, startingY, circleDiameter);
        myCircle.push({ x: startingX, y: startingY, id: i + k });
        startingX += 150;
        }
        startingY += 150;
        startingX = 200;
    }
    console.log(myCircle);
}

function draw () {
    fill('purple');
    // ellipse(100, 100, 100);
    //rect(squareXPosition, squareYPosition, squareWidthPosition, squareHeightPosition += 1);
    //if(squareYPosition > height) {
       // noLoop ();
    //}
}
function mousePressed () {
    for(let j = 0; j < myCircle.length; j++) {
        let distance = dist(mouseY, mouseY, myCircle[j].x, myCircle[j].y);
    }
    //let distance = (dist(mouseX, mouseY, circleX, circleY));
    if (distance < circleDiameter / 2) {
        console.log('circle has been clicked', myCircle[j].id);
    }
}
    //console.log(mouseX, mouseY);
    // for a circle
    // const distance = dist(mouseX, mouseY, 100, 100);
    // console.log(distance);
    // if(distance < 50) {
       //  alert('you hit it');
    // } 
    //rectangle hit testing
   // if((mouseX >= squareXPosition && mouseX<= squareXPosition + squareWidthPosition) && (mouseY >= squareYPosition && mouseY <= squareYPosition + squareHeightPosition)) {
       // console.log('you hit the x')
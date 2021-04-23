// start js file
let mySound;
// this is the part that you have to do to actually play the sound
function preload() {
soundFormats('mp3', 'ogg');
mySound = loadSound('Triple Baka.mp3')
}
function setup() {
// put setup code here
let cnv = createCanvas(100, 100);
cnv.mousePressed(canvasPressed);
background(220);
text('tap here to play', 10, 20);
}

function canvasPressed() {

mySound.play();
}
// end js file
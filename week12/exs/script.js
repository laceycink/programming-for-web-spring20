let mySound;
function preload(){
    soundFormats('mp3', 'ogg');
    mySound = loadSound('assets/doorbell');
}
function setup() {
    mySound.setVolume(0.1);
    mySound.play();
}
function draw() {
  
}
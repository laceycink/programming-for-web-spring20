
var bug1;
var bug2;
var bug3;
var canvas;

function setup() {
    canvas = createCanvas(710, 400);
    noStroke()
    bug1 = new Bug();
    bug2 = new Bug();
    bug3 = new Bug();
}

function draw() {
    background('grey');
    bug1.display();
    bug2.display();
    bug3.display();
}

function Bug() {

    //save a ref for event calls with new values of 'this'
    //ask me about this if you're confused
    var self = this

    this.x = random(width);
    this.y = random(height);

    this.fill = 'white'
    this.diameter = 100;

    this.display = function() {
        fill(this.fill)
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }

    canvas.canvas.addEventListener('click', function(e) {

        //here, this is the canvas not the bug
        var clickedX = e.pageX - this.offsetLeft;
        var clickedY = e.pageY - this.offsetTop;

        var d = dist(clickedX, clickedY, self.x, self.y);

        if (int(d) < (self.diameter / 2 )) {
            self.fill = 'red'
        }
    
    })

};
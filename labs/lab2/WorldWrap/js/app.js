//create variables for start position of circle
let x = 100;
let y = 100;
//create variables for speed of circle set to 5
let xSpeed = 5;
function setup(){
    //createcanvas
    createCanvas(800, 600)
}
function draw(){
    //make it so circle moves to left by changing x value
    x+=xSpeed;
    //overwrite old circles by recalling background
    background(255);
    //create circle at x,y
    circle(x,y,50);
    //if x value is at or greater 800-radius of circle move to most left part of the screen + radius
    if(x>=775){
        x=25;
    }
}
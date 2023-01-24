/*
Algorithm:
Create a variable representing the x position of the circle and have that incremently increase by 5 every draw sequence. This will move the ball 5*60 pixels a second. When the value of x reaches the furthest x value (800) the x value of the circle will reset and go to 0.
*/
//create variables for start position of circle
let x = 100;
let y = 100;
//create variables for speed of circle set to 5
let xSpeed = 5;
function setup(){
    createCanvas(800, 600)
}
function draw(){
    //make it so circle moves to left by changing x value
    x+=xSpeed;
    //delete old circle by overlaying background
    background(250);
    //create circle at x,y
    fill(126, 242, 159);
    circle(x,y,50);
    //if x value is at or greater than 800px move the circle to x=0px
    if(x>=800){
        x=0;
    }
}
/*
Algorithm:
Set variables for the center of the screen as well as the diameter of the circle. Make it so the diameter will increase by 1 every draw sequence. When the diameter is greater than or equal to 200 pixels set diameter back to 1 and find a random position for a new circle to repeat process.
*/
//set initial x and y values of the ball to center of screen
let x= 400;
let y= 300;
//set initial diameter of ball
let d=1;
//set how much diameter should grow per draw sequence
let dIncrease= 1;

//setup function
function setup(){
    //createCanvas
    createCanvas(800,600);
    //setbgcolor
    background(255, 248, 199);
}
function draw(){
    //have diameter increase each cycle
    d+=dIncrease;
    //createcircle
    fill(199, 255, 251);
    circle(x,y,d);
    //if diameter is greater than or equal to 200 set radius back to 0.5 and find new position for circle
    if(d>=200){
        d=1;
        x=Math.floor(Math.random()*801)
        y=Math.floor(Math.random()*601)
    }
}

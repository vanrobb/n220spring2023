//set initial x and y values of the ball to center of screen
let x= 400;
let y= 300;
//set initial radius and diameter of ball
let r= 0.5;
let d=2*r;
//set how much radius should grow per draw sequence
let rIncrease= 0.5;

//setup function
function setup(){
    //createCanvas
    createCanvas(800,600);
    //setbgcolor
    background(255, 248, 199);
}
function draw(){
    //have radius increase each cycle
    r+=rIncrease;
    d=2*r;
    //createcircle
    fill(199, 255, 251);
    circle(x,y,d);
    //if diameter is greater than or equal to 200 set radius back to 0.5 and find new position for circle
    if(d>=200){
        r=0.5;
        x1=x;
        y1=y;
        x=Math.floor(Math.random()*801)
        y=Math.floor(Math.random()*601)
    }
}

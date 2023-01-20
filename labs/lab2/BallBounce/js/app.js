//find random integer value for start position of ball
let x=Math.floor(Math.random()*776);
let y=Math.floor(Math.random()*576);
//find random color for ball
let r=Math.floor(Math.random()*256);
let g=Math.floor(Math.random()*256);
let b=Math.floor(Math.random()*256);
//fix bug where ball spawns in wall causing problems
if(x<25){
    x=25;
}
if(y<25){
    y=25;
}
//create variable for radius and diameter of ball
let rad=25;
let d=rad*2;
//create variables for speed of ball
let xSpeed=5;
let ySpeed=5;

function setup(){
    //createcanvas
    createCanvas(800, 600)
    //Start Console Info
    console.log("startX:"+x);
    console.log("startY:"+y);
    console.log("StartColor:"+r+","+g+","+b);
}
function draw(){
    //have x and y values increase by speed values
    x+=xSpeed;
    y+=ySpeed;
    //overlay background so ball doesn't leave trail of balls
    background(250);
    //create circle
    fill(r,g,b);
    noStroke();
    circle(x,y,d);
    //if edge of circle touches x boundary inverse speed and pick new random color
    if(x<=(0+rad)||x>=(800-rad)){
        xSpeed*=-1;
        r=Math.floor(Math.random()*256);
        g=Math.floor(Math.random()*256);
        b=Math.floor(Math.random()*256);
        //Color Change Console Info
        console.log("color:"+r+","+g+","+b);
    }
    //if edge of circle touches y boundary inverse speed and pick random color
    if(y<=(0+rad)||y>=(600-rad)){
        ySpeed*=-1;
        r=Math.floor(Math.random()*256);
        g=Math.floor(Math.random()*256);
        b=Math.floor(Math.random()*256);
        //Color Change Console Info
        console.log("color:"+r+","+g+","+b);
    }
}
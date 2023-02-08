//take BallBounce code from Lab 2
//function that picks new color and returns it in object
function randColor(){
    let r=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    return {r,g,b};
}
//rgb variable calls on 
let rgb= randColor();
//Change the Original Balls seperated variables into one object named Ball
let ball = {
    //positon object includes starting position randomizer
    pos:{
        x: Math.floor(Math.random()*751)+25,
        y: Math.floor(Math.random()*551)+25
    },
    //velocity object
    vel:{
        x: 5,
        y: 5
    },
    //grabs rgb object and divides it into r,g, and b values to send to draw etc.
    color:{
        r: rgb.r,
        g: rgb.g,
        b: rgb.b
    },
    d: 50
}
//color changing function, calls for new random color and then assigns color to ball objects color
function colorswap(){
    rgb= randColor();
    ball.color.r=rgb.r;
    ball.color.g=rgb.g;
    ball.color.b=rgb.b;
}
function setup(){
    //createcanvas
    createCanvas(800, 600)
    //Start Console Info
    console.log("startX:"+ball.pos.x);
    console.log("startY:"+ball.pos.y);
    console.log("StartColor:"+ball.color.r+","+ball.color.g+","+ball.color.b);
}
function draw(){
    //Change all the starting position, color changes and other variables to update to new Ball object
    //have x and y values increase by speed values
    ball.pos.x+=ball.vel.x;
    ball.pos.y+=ball.vel.y;
    //overlay background so ball doesn't leave trail of balls
    background(250);
    //create circle
    fill(color(ball.color.r,ball.color.g,ball.color.b));
    noStroke();
    circle(ball.pos.x,ball.pos.y,ball.d);
    //if edge of circle touches x boundary inverse speed and pick new random color
    if(ball.pos.x<=(0+ball.d/2)||ball.pos.x>=(800-ball.d/2)){
        ball.vel.x*=-1;
        colorswap();
        console.log(rgb);
    }
    //if edge of circle touches y boundary inverse speed and pick random color
    if(ball.pos.y<=(0+ball.d/2)||ball.pos.y>=(600-ball.d/2)){
        ball.vel.y*=-1;
        colorswap();
        console.log(rgb);
    }
}
//create two objects for two tall rectangles with the attributes height,width, and position
//have these two objects start in the center left and right of the canvas
let lRect = new Paddle(200,50,50,300);
let rRect = new Paddle(200,50,750,300);
function Paddle(height,width,xPos,yPos){
    this.pos= {x:xPos, y:yPos};
    this.size={x:width, y:height};
}
console.log(lRect.pos.x);
//setup P5 setup and draw functions
function setup(){
    createCanvas(800,600);
}
function draw(){
    background(200);
    //create the two rectangle objects
    fill(0);
    rectMode(CENTER);
    rect(lRect.pos.x,lRect.pos.y,lRect.size.x,lRect.size.y);
    rect(rRect.pos.x,rRect.pos.y,rRect.size.x,rRect.size.y);
    //setup if statement that determines if a key is being pressed
    if(keyIsPressed){
        //within the if statement create two if statements for if the up or down arrow is pressed
        if (((key=='w')||(key=='W')||keyCode== UP_ARROW)&&lRect.pos.y<=500){
            //in the up arrow if statement have it move one of the two rectangles up and the other down
            lRect.pos.y+=3;
            rRect.pos.y-=3;
        }
        if (((key=='s')||(key=='S')||keyCode== DOWN_ARROW)&&lRect.pos.y>=100){
            //in the down arrow if statement have it move the rectangle that doesn't move up when the up arrow is pressed up and the other rectangle down
            rRect.pos.y+=3;
            lRect.pos.y-=3;
        }
    }
}

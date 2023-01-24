/*
Algorithm:
Change the fill color based on the x position of the mouse. Have the ball created every draw sequence at the position of the cursor.
*/
function setup(){
    //createcanvas
    createCanvas(400, 300)
}
function draw(){
    //if x value is less than 200 set fill to blue
    if(mouseX<200){
        fill(73, 118, 242)
    }
    //if x value is greater than 200 set fill to red
    else{
        fill(242, 76, 73)
    }
    //draw circle with diameter 50 and at position of mouse
    circle(mouseX,mouseY,50);
}
//create a new function called composition with inputs x and y added color attribute to change colors of the different cars
function composition(x,y,color){
    //create a composition find all the related values between the different objects that make the composition so can be controlled by 2 variables
    fill(color);
    rectMode(CENTER);
    noStroke()
    ellipse(x-40,y-20.5,7,4);
    ellipse(x+40,y-20.5,7,4);
    rect(x,y,75,165);
    fill("#73a491");
    ellipse(x-30, y-80,10,5);
    ellipse(x+30, y-80,10,5);
    fill("#2a2a28");
    quad(x-27.5,y-35,x+27.5,y-35,x+22.5,y-12,x-22.5,y-12);
    quad(x-29.5,y-20,x-25.5,y-5.5,x-25.5,y+20,x-29.5,y+32);
    quad(x+29.5,y-20,x+25.5,y-5.5,x+25.5,y+20,x+29.5,y+32);
    quad(x-25.5,y+62.5,x+25.5,y+62.5,x+20.5,y+29.5,x-20.5,y+29.5);
    fill("#690909");
    ellipse(x-30, y+80,13,5);
    ellipse(x+30, y+80,13,5);
}
//different starting positions for blue and red cars
    let y=600;
    let y1=300;
//setup p5 functions setup and draw
function setup(){
    createCanvas(800, 800);
}
function draw(){
    //refresh background so can't see past movement/iterations of car
    background("#c1bfbe");
    //different colors for cars
    let c1= color("#ebc334");
    let c2= color("#3459eb");
    let c3= color("#eb3434");
    //changes the position of blue and red cars by pressing w/s or up/down
    if(keyIsPressed){
        if ((key=='w')||(key=='W')){
            y=y-5;
        }
        else if ((key=='s')||(key=='S')){
            y=y+5;
        }
        else if (keyCode== UP_ARROW){
            y1=y1-3;
        }
        else if (keyCode== DOWN_ARROW){
            y1=y1+3;
        }
    }
    //call function with different x and y attributes as well as different color attributes
    composition(mouseX,mouseY,c1);
    composition(mouseX-250,y,c2);
    composition(mouseX+150,y1,c3);
    
}
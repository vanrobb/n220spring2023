//find a random color with a red value greater than 150
function randColor(){
    let r=Math.floor(Math.random()*106)+150;
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    console.log(r,g,b);
    return r,g,b;
}

//assign that random colors rgb values to variable named rgb
let rgb=randColor();

//create a function called noRed with an input named c
function noRed(c){
    //set red value to 0 in function
    c.setRed(0);
    //return the new color
    return c;
}

//setup p5 functions setup and draw
function setup(){
    createCanvas(800, 800);
}

function draw(){
    //create a fill in the draw function calling noRed and the color from the rgb values
    fill(noRed(color(rgb)));
    //draw a circle to see test
    circle(400,400,400);
}
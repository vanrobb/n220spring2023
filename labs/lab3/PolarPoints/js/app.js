//setup p5 functions setup and draw
function setup(){
    createCanvas(800, 800);

}
function draw(){
    //create a variable called res and have res call the function polarpoints
    res=polarPoint();
    //translate canvas by 100 x pixels and 100 y pixels
    translate(100, 100);
    //draw a circle at res.x and res.y with a radius of 10
    circle(res.x ,res.y ,20);
}
//create function polarpoints with one argument r
function polarPoint(r){
    //in polar points create a variable x
    //set x to be equal to the argument r times the math sin function with mouseX as the functions argument
    let x=r*Math.sin(mouseX);
    //in polar points create a variable y 
    //set y to be equal to the argument r times the math cosine function with mouseX as the functions argument
    let y=r*Math.cos(mouseX);
    createVector(x,y);
}
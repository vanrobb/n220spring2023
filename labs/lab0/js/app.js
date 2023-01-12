function setup(){
    createCanvas(800,600);
    noStroke();
    background(227, 180, 70);

    fill(32, 121, 176);
    rect(40,50,100,20);

    stroke(2);
    line(0,500,200,20);
}
function draw(){
    noStroke();
    fill(161, 32, 32);
    circle(mouseX,mouseY,60);
}
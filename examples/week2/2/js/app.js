let d = 5;
function setup (){
    createCanvas(800,600);
    console.log(d);
}
function draw (){
    circle(mouseX, mouseY, d);
    if(mouseIsPressed&&d<50){
        d++;
    }
    console.log(d);

}
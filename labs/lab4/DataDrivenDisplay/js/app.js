//Create an object for a car with the attributes width, height, color and position
let car = {
    pos:{
        x:0,
        y:0
    },
    size:{
        x: 75,
        y: 165
    },
    c:{
        body:"#ebc334",
        hLights:"#73a491",
        bLights:"#690909",
        windows:"#2a2a28"
    }
}
//Using the attributes from the object create a function that can draw the car
function composition(someCar){
    fill(someCar.c.body); 
    rectMode(CENTER);
    noStroke()
    ellipse(someCar.pos.x-40,someCar.pos.y-20.5,someCar.size.x/10.7,someCar.size.y/41.25);
    ellipse(someCar.pos.x+40,someCar.pos.y-20.5,someCar.size.x/10.7,someCar.size.y/41.25);
    rect(someCar.pos.x,someCar.pos.y,someCar.size.x,someCar.size.y);
    fill(someCar.c.hLights);
    ellipse(someCar.pos.x-30, someCar.pos.y-80,someCar.size.x/7.5,someCar.size.y/33);
    ellipse(someCar.pos.x+30, someCar.pos.y-80,someCar.size.x/7.5,someCar.size.y/33);
    fill(someCar.c.windows);
    quad(someCar.pos.x-27.5,someCar.pos.y-35,someCar.pos.x+27.5,someCar.pos.y-35,someCar.pos.x+22.5,someCar.pos.y-12,someCar.pos.x-22.5,someCar.pos.y-12);
    quad(someCar.pos.x-29.5,someCar.pos.y-20,someCar.pos.x-25.5,someCar.pos.y-5.5,someCar.pos.x-25.5,someCar.pos.y+20,someCar.pos.x-29.5,someCar.pos.y+32);
    quad(someCar.pos.x+29.5,someCar.pos.y-20,someCar.pos.x+25.5,someCar.pos.y-5.5,someCar.pos.x+25.5,someCar.pos.y+20,someCar.pos.x+29.5,someCar.pos.y+32);
    quad(someCar.pos.x-25.5,someCar.pos.y+62.5,someCar.pos.x+25.5,someCar.pos.y+62.5,someCar.pos.x+20.5,someCar.pos.y+29.5,someCar.pos.x-20.5,someCar.pos.y+29.5);
    fill(someCar.c.bLights);
    ellipse(someCar.pos.x-30, someCar.pos.y+80,someCar.size.x/5.77,someCar.size.y/33);
    ellipse(someCar.pos.x+30, someCar.pos.y+80,someCar.size.x/5.77,someCar.size.y/33);
}
//setup P5 setup and draw functions
function setup(){
 createCanvas(600, 800);
}
function draw(){
    //Call upon the car draw function in the P5 draw function
    background("#2f2f2f");
    composition(car);
    car.pos.x=mouseX;
    car.pos.y=mouseY;
}

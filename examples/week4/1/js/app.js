//wheel
let wheelA= new wheel(0,0,10,5,true,"wwork",true);
function wheel(tempX,tempY,tempR,tempTire,tempSpokes,tempBrand,tempMoving){
    this.x=tempX;
    this.y=tempY;
    this.r=tempR;
    this.tire=tempTire;
    this.spokes=tempSpokes;
    this.brand=tempBrand;
    this.moving=tempMoving
}

//sandwich
let sandwich= {
    meatType: "turkey",
    meatWeight: 12,
    breadType: "rye",
    toasted: true,
    cheeseType: "White Cheddar",

}
//wheel2

let wheelB={
    radiusOuterLL: 10,
    radiusInner: 8
}
function setup(){
    createCanvas(600,400);
}
function draw(){

}
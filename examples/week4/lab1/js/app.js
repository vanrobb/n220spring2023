let bike= new bicycle(0,0);
function bicycle(yearold,w){
    this.age=yearold;
    this.wear=w;
}
function agewear(someBike){
    someBike.age=someBike.age+1;
    if(someBike.wear<=100){
        someBike.wear=someBike.age*20
    }
}
for(let i=0; i<5; i++){
    agewear(bike);
    console.log(bike);
}

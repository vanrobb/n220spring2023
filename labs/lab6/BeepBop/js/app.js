//Create a variable that gets the div element
let box = document.getElementById("BB");
//get random number between 1 and 10
let rng= Math.ceil(Math.random()*10);
console.log("random value: "+rng);
//Create a loop that starts at random number and increases by random number 25 times
for(let i=rng; i<=(rng*25);i+=rng){
    //within loop there will need to be three conditional statements
    //the first conditional statement will be an if statment that determines if the loops value returns 0 when it is a modulo of 3 and 0 when it is a modulo of 5
    if((i%3)+(i%5)==0){
        //add to the innerhtml of the div beepbop 
        box.innerHTML=box.innerHTML+"beepbop ";
        console.log(i/rng+": "+i+" beepbop")
    }
    //the second conditional statement will be an else if statement that determines if the loops value returns 0 when it is a modulo of 3
    else if(i%3==0){
        //add to the innerhtml of the div beep
        box.innerHTML=box.innerHTML+"beep "
        console.log(i/rng+": "+i+" beep")
    }
    //the third conditional statement will be an else if statement that determines if the loops value returns 0 when it is a modulo of 5
    else if(i%5==0){
        //add to the innerhtml of the div bop
        box.innerHTML=box.innerHTML+"bop "
        console.log(i/rng+": "+i+" bop")
    }
    else{
        console.log(i/rng+": "+i)
    }
}


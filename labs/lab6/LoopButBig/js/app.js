//Create a variable that gets the div element
let LBB = document.getElementById("LBB");
//Create a loop that starts at 1000 and increases by 1000 until the value is equal to 5000
for(i=1000;i<=5000;i+=1000){
    //Change the inner html to add the value from the loop with proper spacing and commas
    LBB.innerHTML=LBB.innerHTML+i+", ";
}
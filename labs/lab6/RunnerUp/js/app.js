//Create a variable that calls on the 2nd place div
let S= document.getElementById("S");
//Create a variable that calls on the 3rd place div
let T= document.getElementById("T");
//Create an array with three times for 1st 2nd and 3rd in order
let time=[9.58,9.63,9.69];
//Change the inner html of the 2nd place to be equal to the [1] value of the array
S.innerHTML="The second place time is "+time[1]+" seconds!";
//Change the inner html of the 3rd place to be equal to the [2] value of the array
T.innerHTML="The third place time is "+time[2]+" seconds!";
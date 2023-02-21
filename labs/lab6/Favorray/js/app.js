//Create a variable that gets the div element
let F=document.getElementById("F");
//Create an array with 5 of my favorite things
let favorray = ["Dogs","Sushi","Videogames","Computers","TV Shows"]
//Create a loop that goes through the 5 different things
for(i=0;i<5;i++){
    //Add to the inner html of the div, that the thing in the position of the array at the number in the loop ...is my favorite thing. and then start a new line for the next thing
    F.innerHTML=F.innerHTML+favorray[i]+", is/are one of my favorite things.<br>"
}
//create variable that calls ID
let overOut = document.getElementById("o&o");
//create object for div styling that includes height 100px, width 100px, color blue, and color black
let style = {
    size: 100,
    color:{
        blue:"#3262a8",
        black:"#121212"
    }
}
//change style of div to specifications of object
overOutt.style.backgroundColor= style.color.blue;
overOut.style.width= style.size+"px";
overOut.style.height= style.size+"px";
//add event listeners for mouse over and mouse out
overOut.addEventListener("mouseover", onmouseover);
overOut.addEventListener("mouseout", onmouseout);
//function that changes onmouseover change the div styling to black
function onmouseover(){
    overOut.style.backgroundColor= style.color.black;
}
//function that changes onmouseout change the div styling back to blue
function onmouseout(){
    overOut.style.backgroundColor= style.color.blue;
}
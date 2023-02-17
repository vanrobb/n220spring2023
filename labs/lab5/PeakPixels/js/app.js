//create a variable that calls div from html
let Peak = document.getElementById("PePi");
//create object for div styling
let style = {
    size: 100,
    color: "#32a852"
};
//change style of div to be 100px wide 100px height and background color green
Peak.style.backgroundColor= style.color;
Peak.style.width= style.size+"px";
Peak.style.height= style.size+"px";
//add event listener for on mouse click
Peak.addEventListener("click", onMouseClick);
//When clicked increase object width and heighth by 1.1
function onMouseClick(){
    style.size=style.size*1.1;
    Peak.style.width= style.size+"px";
    Peak.style.height= style.size+"px";
}

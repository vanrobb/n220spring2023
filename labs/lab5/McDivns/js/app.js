//have variable that stores calling ID
let mcDiv = document.getElementById("mcD");
//make div visible
mcDiv.style.height="100px";
mcDiv.style.backgroundColor="#e8e7e3";
//add click event listener
mcDiv.addEventListener("click", onMouseClick);
//have statement that if the div is clicked append mc to the inner html
function onMouseClick(){
    mcDiv.innerHTML=mcDiv.innerHTML+"mc"
}

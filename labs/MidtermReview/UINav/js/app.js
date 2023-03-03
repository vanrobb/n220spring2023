//change background color and remove body margin
let body=document.querySelector("body");
body.style.backgroundColor="#7289A6";


//Create Variable that represents container class from document
let container = document.getElementById("container");
//Set style of buttons
container.style.marginTop="47vh";
container.style.marginBottom="47vh";
container.style.display="flex";
container.style.gap="5vw";
container.style.justifyContent="center";

//Query select div
let btn = document.querySelectorAll(".button");
console.log(btn);
btn.forEach(element=>{
//Call upon class and set style of divs text and divs all centered on screen
element.style.display="flex";
element.style.width="auto";
element.style.height="5vh";
element.style.cursor="pointer";
element.style.borderRadius="2px";
element.style.border="solid 3px #314259";
element.style.paddingLeft="1%";
element.style.paddingRight="1%";
element.style.fontFamily="'Verdana', sans-serif";
element.style.fontSize="2em";
element.style.alignItems="center";
element.style.color="#D1D1D1";
});

//Create Variables for each ids
let o = document.getElementById("one");
let tw = document.getElementById("two");
let th = document.getElementById("three");
let fo = document.getElementById("four");
let fi = document.getElementById("five");
let s = document.getElementById("six");

//Store Original Color in variable
let oColor="rgb(191, 4, 54)";
let twColor="rgb(255, 105, 180)";
let thColor="rgb(244, 153, 75)";
let foColor="rgb(115, 70, 54)";
let fiColor="rgb(143, 58, 58)";
let sColor="rgb(52, 107, 95)";

//Make it so each div has a different color
o.style.backgroundColor=oColor;
tw.style.backgroundColor=twColor;
th.style.backgroundColor=thColor;
fo.style.backgroundColor=foColor;
fi.style.backgroundColor=fiColor;
s.style.backgroundColor=sColor;

//add onlick listener to each id
o.onclick= function(){ChangeColor(o,oColor)};
tw.onclick= function(){ChangeColor(tw,twColor)};
th.onclick= function(){ChangeColor(th,thColor)};
fo.onclick= function(){ChangeColor(fo,foColor)};
fi.onclick= function(){ChangeColor(fi,fiColor)};
s.onclick= function(){ChangeColor(s,sColor)};

//When one of the divs is clicked change its color and make text bold; if the color has already been changed change it back to original color
function ChangeColor(button, color){
    if(button.style.backgroundColor==color){
        o.style.backgroundColor=oColor;
        tw.style.backgroundColor=twColor;
        th.style.backgroundColor=thColor;
        fo.style.backgroundColor=foColor;
        fi.style.backgroundColor=fiColor;
        s.style.backgroundColor=sColor;
        button.style.backgroundColor="#FF7F50";
        button.style.fontWeight="bold";
    }
    else{
        button.style.backgroundColor=color
        button.style.fontWeight="normal";
    }
}
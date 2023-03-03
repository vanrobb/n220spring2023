//DOCUMENT VARIABLES
//Variables for each ID
let header=document.getElementById("header");
let scorec=document.getElementById("scoreContainer");
let score=document.getElementById("score");
let scoret=document.getElementById("scoret")
let WoL=document.getElementById("WoL");
let WoLt=document.getElementById("WoLtext");
let btns=document.getElementById("buttons");
let rock=document.getElementById("rock");
let paper=document.getElementById("paper");
let scissors=document.getElementById("scissors");
let guard=document.getElementById("guard");

//Variables for each class
let text = document.querySelectorAll(".textformat");
let btn = document.querySelectorAll(".button");



//STYLING
//default text styling
text.forEach(element=>{
    element.style.fontFamily="'Verdana', sans-serif";
    element.style.margin="0px";
    element.style.textAlign="center";
});

//header styling
header.style.display="flex";
header.style.height="30vh";
header.style.justifyContent="center";
header.style.flexDirection="column";
header.style.alignItems="center";
    //score styling
    scorec.style.height="15vh";
    scorec.style.marginBottom="2.5vh";
    scoret.style.fontSize="1.2vw";
    score.style.fontSize="7vw";
    //win or loss styling
    WoL.style.height="12vh";
    WoLt.style.padding="1.25vh";
    WoLt.style.fontSize="1.6vw";
//button centering and styling
btns.style.display="flex";
btns.style.gap="8vw";
btns.style.justifyContent="center";
btns.style.marginTop="5vh";
//Change Each Btn to have standardized style
btn.forEach(element=>{
    //Call upon class and set style of divs text and divs all centered on screen
    element.style.display="flex";
    element.style.width="10vw";
    element.style.height="10vw";
    element.style.cursor="pointer";
    element.style.borderRadius="2px";
    element.style.border="solid 3px #000000";
    element.style.paddingLeft="1%";
    element.style.paddingRight="1%";
    element.style.alignItems="center";
    element.style.justifyContent="center";
    element.style.fontSize="1.6vw";
    element.style.backgroundColor="#55e4e6";
    });
//guard button different color
guard.style.backgroundColor="#deb41b"
//change background color of program




//FUNCTION
//score global variable
let scoreValue=0;
//add onlick listener to each button
//When one of the buttons is clicked record button was clicked by sending a variable to the function, for example if rock is clicked send 0 to function, if paper is clicked send 1 to function, etc...
rock.onclick= function(){gameStart(0)};
paper.onclick= function(){gameStart(1)};
scissors.onclick= function(){gameStart(2)};
guard.onclick= function(){gameStart(3)};

function gameStart(num){
//array that is used to tell results
let selection=["Rock","Paper","Scissors"];
//If player does not choose guard
if(num<3){
    //calls function compselect which finds a random number between 0-2
    randSelect=compselect();
    //finds difference between number coorelating to player selection and computers selection
    let outcome=num-randSelect;
    //if the difference is -1 or 2 the player has lost,(Rock(0)-Paper(1)=-1, Paper(1)-Scissors(2)=-1) (Scissors(2)-Rock(0)=2)
    if(outcome==-1||outcome==2){
        WoLt.style.color="#cf292f";
        WoLt.innerHTML="You Lost!"+"<br>"+"You Chose: "+selection[num]+"<br>"+"The computer chose: "+selection[randSelect];
        //if the player loses the score decreases
        scoreValue-=1;
        score.innerHTML=scoreValue;
    }
    //if the difference is 1 or -2 the player has won,(Paper(1)-Rock(0)=1, Scissors(2)-Paper(1)=1) (Rock(0)-Scissors(2)=-2)
    else if(outcome==1||outcome==-2){
        WoLt.style.color="#33ab45";
        WoLt.innerHTML="You Won!"+"<br>"+"You Chose: "+selection[num]+"<br>"+"The computer chose: "+selection[randSelect];
        //If player wins there score increases
        scoreValue+=1;
        score.innerHTML=scoreValue;
    }
    //if the difference is 0 then both chose the same thing and its a tie, The numbers representing the values will cancel out to 0
    else{
        //if the player ties score does not alter
        WoLt.style.color="#000000";
        WoLt.innerHTML="You Tied!"+"<br>"+"You Chose: "+selection[num]+"<br>"+"The computer chose: "+selection[randSelect];
    }
}
//If player chooses guard do nothing else but subtract point from player unless score value is less than 0
else if(num==3&&scoreValue>0){
    WoLt.style.color="#deb41b";
    WoLt.innerHTML="You guarded this round and lost a point";
    scoreValue-=0.5;
    score.innerHTML=scoreValue;
}
//If player chooses guard but has no points to use guard
else{
    WoLt.style.color="#ab3333";
    WoLt.innerHTML="You need half a point in order to guard";
}
}

//function that finds a random number between 0-2 represents computers selection for round
function compselect(){
    selection=Math.floor(Math.random()*3);
    return selection;
}

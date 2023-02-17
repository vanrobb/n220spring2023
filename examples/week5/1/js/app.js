let respond = document.getElementById("cool");
function checkResponse(time){
    if(time=="afternoon"){
        respond.innerHTML="That is correct!";
    }
    else{
        respond.innerHTML="Guess Again";
    }
}
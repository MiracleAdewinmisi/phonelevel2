
var w1 = document.createElement("div")
w1.id = "w1"
var w2 = document.createElement("div")
w2.id = "w2"
var w3 = document.createElement("div")
w3.id = "w3"
var w4 = document.createElement("div")
w4.id = "w4"
var w5 = document.createElement("div")
w5.id = "w5"
var w6 = document.createElement("div")
w6.id = "w6"
var w7 = document.createElement("div")
w7.id = "w7"
var w8 = document.createElement("div")
w8.id = "w8"
document.querySelector(".winn").appendChild(w1)
document.querySelector(".winn").appendChild(w2)
document.querySelector(".winn").appendChild(w3)
document.querySelector(".winn").appendChild(w4)
document.querySelector(".winn").appendChild(w5)
document.querySelector(".winn").appendChild(w6)
document.querySelector(".winn").appendChild(w7)
document.querySelector(".winn").appendChild(w8)

w1.style.display = "none"
w2.style.display = "none"
w3.style.display = "none"
w4.style.display = "none"
w5.style.display = "none"
w6.style.display = "none"
w7.style.display = "none"
w8.style.display = "none"


var fname = document.createElement("button")
fname.id = "fname"
var score = document.createElement("button")
score.id = "score"

var fscore = document.createElement("span")
fscore.id = "fscore"
var sscore = document.createElement("span")
sscore.id = "sscore"
score.appendChild(fscore)
score.appendChild(sscore)
var sname = document.createElement("button")
sname.id = "sname"
document.querySelector("#scoreboard").appendChild(fname)
document.querySelector("#scoreboard").appendChild(score)
document.querySelector("#scoreboard").appendChild(sname)

scoreboard.style.display = "none"    
var replay = document.createElement("button")
replay.id = "replay"
replay.innerText = "Replay"
var end = document.createElement("button")
end.id = "end"
end.innerText = "End-Game"
document.querySelector("#down").appendChild(replay)
document.querySelector("#down").appendChild(end)

// document.getElementsByClassName("downcont").style.display = "none"
down.style.display = "none"
replay.style.display = "none"


input1.innerHTML = input1.value;
input2.innerHTML = input2.value;

function play(){
    gamealert.style.display = "none"
}
function start(){
    if(input1.value != "" && input2.value != ""){
        player.style.display = "block"
        gamealert.style.display = "block"
        gamealertmessage.innerHTML = "Welcome "+ input1.value + " and " + input2.value +". Press Play to begin" + "</br><button onclick='play()' class='playbutton btn bg-light float-right'>Play</button>"
        player.innerText = input1.value +"'s" + " turn";
        // if (gamealert.style.display == "block") {
        //     document.getElementsByClassName("gamebut").disabled = "disabled"
        // }
        scoreboard.style.display = "block";
        replay.style.display = "inline";
        fname.innerText = input1.value;
        sname.innerText = input2.value;
        one.innerText = ""
        two.innerText = ""
        three.innerText = ""
        four.innerText = ""
        five.innerText = ""
        six.innerText = ""
        seven.innerText = ""
        eight.innerText = ""
        nine.innerText = ""
        one.style.backgroundColor = "unset"
        two.style.backgroundColor = "unset"
        three.style.backgroundColor = "unset"
        four.style.backgroundColor = "unset"
        five.style.backgroundColor = "unset"
        six.style.backgroundColor = "unset"
        seven.style.backgroundColor = "unset"
        eight.style.backgroundColor = "unset"
        nine.style.backgroundColor = "unset"
        fscore.innerText = "0"
        sscore.innerText = "0"
        down.style.display = "block"
        w1.style.display = "none"
        w2.style.display = "none"
        w3.style.display = "none"
        w4.style.display = "none"
        w5.style.display = "none"
        w6.style.display = "none"
        w7.style.display = "none"
        w8.style.display = "none"
        inn.style.marginTop = "unset"
        scoreboard.style.marginTop = "25px"
    } else if(input1.value == "" && input2.value != ""){
        welcome.innerHTML = "First Player is yet to input Name"
    } else if (input1.value != "" && input2.value == ""){
        welcome.innerHTML = "Second Player is yet to input Name"
    } else  {
            welcome.innerHTML = " Players Should Enter their Name";
        }

}
var turn = 1;
function show(e){

    if( welcome.innerText == "🎉🎉✨✨ " + input1.value + " Won, Press Replay to Start Again" || 
        welcome.innerText == "🎉🎉✨✨ " + input2.value + " Won, Press Replay to Start Again"){
            
            welcome.innerHTML = "We have a Winner Already, Press Re-Play to Start Again" ;
    } 
    if(welcome.innerHTML == "We have a Winner Already, Press Re-Play to Start Again")return;

    if(e.target.innerText != "") return;

    if(turn == 1 && down.style.display == "block"){ 
        e.target.innerText = "X";
        turn = 2;
        player.innerText = input2.value +"'s" + " turn";
        welcome.style.display = "block"
        welcome.innerHTML = ""
        
    } else if (turn == 2 && down.style.display == "block"){
        e.target.innerText = "O";
        turn = 1;
        player.innerText = input1.value +"'s" + " turn";
        welcome.style.display = "block"
        welcome.innerHTML = ""
    } else{
        welcome.style.display = "block"
        welcome.innerHTML = "Press Start to Start Game";
    } 

    if((one.innerText == "X" && two.innerText == "X" && three.innerText == "X") || 
        (four.innerText == "X" && five.innerText == "X" && six.innerText == "X") ||
        (seven.innerText == "X" && eight.innerText == "X" && nine.innerText == "X") ||
        (one.innerText == "X" && four.innerText == "X" && seven.innerText == "X") || 
        (two.innerText == "X" && five.innerText == "X" && eight.innerText == "X") ||
        (three.innerText == "X" && six.innerText == "X" && nine.innerText == "X") ||
        (one.innerText == "X" && five.innerText == "X" && nine.innerText == "X") ||
        (three.innerText == "X" && five.innerText == "X" && seven.innerText == "X") ){
            welcome.style.display = "block"
            welcome.innerText = "🎉🎉✨✨ " + input1.value + " Won, Press Replay to Start Again"
            player.style.display = "none"
            ++fscore.innerHTML;
        
        }

    if((one.innerText == "O" && two.innerText == "O" && three.innerText == "O") ||
        (four.innerText == "O" && five.innerText == "O" && six.innerText == "O") ||
        (seven.innerText == "O" && eight.innerText == "O" && nine.innerText == "O") ||
        (one.innerText == "O" && four.innerText == "O" && seven.innerText == "O") ||
        (two.innerText == "O" && five.innerText == "O" && eight.innerText == "O") ||
        (three.innerText == "O" && six.innerText == "O" && nine.innerText == "O") ||
        (one.innerText == "O" && five.innerText == "O" && nine.innerText == "O") ||
        (three.innerText == "O" && five.innerText == "O" && seven.innerText == "O")){
            welcome.style.display = "block"
            welcome.innerText = "🎉🎉✨✨ " + input2.value + " Won, Press Replay to Start Again"
            player.innerText = ""
            player.style.display = "none"
            ++sscore.innerHTML;
        
    }  else if ( ( (one.innerText == "X" || one.innerText == "O") &&
                  (two.innerText == "X" || two.innerText == "O") &&
                  (three.innerText == "X" || three.innerText == "O") &&
                  (four.innerText == "X" || four.innerText == "O") &&
                  (five.innerText == "X" || five.innerText == "O") &&
                  (six.innerText == "X" || six.innerText == "O") &&
                  (seven.innerText == "X" || seven.innerText == "O") &&
                  (eight.innerText == "X" || eight.innerText == "O") &&
                  (nine.innerText == "X" || nine.innerText == "O")) && (welcome.innerText != "🎉🎉✨✨ " + input1.value + " Won, Press Replay to Start Again" && welcome.innerText != "🎉🎉✨✨ " + input2.value + " Won, Press Replay to Start Again" &&  welcome.innerHTML != "We have a Winner Already, Press Re-Play to Start Again" ))  {
                    gamealert.style.display = "block"
                    gamealertmessage.innerHTML = "Draw game, press Re-play button to start again" + "</br><button onclick='play()' class='playbutton btn bg-light float-right'>Okay</button>"
    }
    if((one.innerText == "X" && two.innerText == "X" && three.innerText == "X") || (one.innerText == "O" && two.innerText == "O" && three.innerText == "O")){
        w3.style.display = "block"
        one.style.backgroundColor = "#35363A"
        two.style.backgroundColor = "#35363A"
        three.style.backgroundColor = "#35363A"
        inn.style.marginTop = "-20px"
        scoreboard.style.marginTop = "50px"
    }
    if((one.innerText == "X" && five.innerText == "X" && nine.innerText == "X") || (one.innerText == "O" && five.innerText == "O" && nine.innerText == "O")){
        w1.style.display = "block"
        one.style.backgroundColor = "#35363A"
        five.style.backgroundColor = "#35363A"
        nine.style.backgroundColor = "#35363A"
        inn.style.marginTop = "-20px"
        scoreboard.style.marginTop = "50px"
    }
    if((four.innerText == "X" && five.innerText == "X" && six.innerText == "X") || (four.innerText == "O" && five.innerText == "O" && six.innerText == "O")){
        w4.style.display = "block"
        four.style.backgroundColor = "#35363A"
        five.style.backgroundColor = "#35363A"
        six.style.backgroundColor = "#35363A"
        inn.style.marginTop = "-20px"
        scoreboard.style.marginTop = "50px"
    }
    if((seven.innerText == "X" && eight.innerText == "X" && nine.innerText == "X") || (seven.innerText == "O" && eight.innerText == "O" && nine.innerText == "O")){
        w5.style.display = "block"
        seven.style.backgroundColor = "#35363A"
        eight.style.backgroundColor = "#35363A"
        nine.style.backgroundColor = "#35363A"
        inn.style.marginTop = "-20px"
        scoreboard.style.marginTop = "50px"
    }
    if((one.innerText == "X" && four.innerText == "X" && seven.innerText == "X") || (one.innerText == "O" && four.innerText == "O" && seven.innerText == "O")){
        w6.style.display = "block"
        one.style.backgroundColor = "#35363A"
        four.style.backgroundColor = "#35363A"
        seven.style.backgroundColor = "#35363A"
        inn.style.marginTop = "-20px"
        scoreboard.style.marginTop = "50px"
    }
    if((two.innerText == "X" && five.innerText == "X" && eight.innerText == "X") || (two.innerText == "O" && five.innerText == "O" && eight.innerText == "O")){
        w7.style.display = "block"
        two.style.backgroundColor = "#35363A"
        five.style.backgroundColor = "#35363A"
        eight.style.backgroundColor = "#35363A"
        inn.style.marginTop = "-20px"
        scoreboard.style.marginTop = "50px"
    }
    if((three.innerText == "X" && six.innerText == "X" && nine.innerText == "X") || (three.innerText == "O" && six.innerText == "O" && nine.innerText == "O")){
        w8.style.display = "block"
        three.style.backgroundColor = "#35363A"
        six.style.backgroundColor = "#35363A"
        nine.style.backgroundColor = "#35363A"
        inn.style.marginTop = "-20px"
        scoreboard.style.marginTop = "50px"
    }
    if((three.innerText == "X" && five.innerText == "X" && seven.innerText == "X") || (three.innerText == "O" && five.innerText == "O" && seven.innerText == "O")){
        w2.style.display = "block"
        three.style.backgroundColor = "#35363A"
        five.style.backgroundColor = "#35363A"
        seven.style.backgroundColor = "#35363A"
        inn.style.marginTop = "-20px"
        scoreboard.style.marginTop = "50px"
    }
   
}
    end.onclick = function(){
        scoreboard.style.display = "none";
        replay.style.display = "none";
        fname.innerText = "";
        input1.value = "";
        sname.innerText =  "";
        player.style.display = "none"
        input2.value = "";
        one.innerText = ""
        two.innerText = ""
        three.innerText = ""
        four.innerText = ""
        five.innerText = ""
        six.innerText = ""
        seven.innerText = ""
        eight.innerText = ""
        nine.innerText = ""
        one.style.backgroundColor = "unset"
        two.style.backgroundColor = "unset"
        three.style.backgroundColor = "unset"
        four.style.backgroundColor = "unset"
        five.style.backgroundColor = "unset"
        six.style.backgroundColor = "unset"
        seven.style.backgroundColor = "unset"
        eight.style.backgroundColor = "unset"
        nine.style.backgroundColor = "unset"
        down.style.display = "none"
        welcome.style.display = "none"
        fscore.innerText = ""
        sscore.innerText = ""
        w1.style.display = "none"
        w2.style.display = "none"
        w3.style.display = "none"
        w4.style.display = "none"
        w5.style.display = "none"
        w6.style.display = "none"
        w7.style.display = "none"
        w8.style.display = "none"
        inn.style.marginTop = "unset"
        scoreboard.style.marginTop = "25px"
}
    replay.onclick = function(){
        welcome.style.display = "none"
        welcome.innerHTML = ""
        player.style.display = "block"
        one.innerText = ""
        two.innerText = ""
        three.innerText = ""
        four.innerText = ""
        five.innerText = ""
        six.innerText = ""
        seven.innerText = ""
        eight.innerText = ""
        nine.innerText = ""
        one.style.backgroundColor = "unset"
        two.style.backgroundColor = "unset"
        three.style.backgroundColor = "unset"
        four.style.backgroundColor = "unset"
        five.style.backgroundColor = "unset"
        six.style.backgroundColor = "unset"
        seven.style.backgroundColor = "unset"
        eight.style.backgroundColor = "unset"
        nine.style.backgroundColor = "unset"
        w1.style.display = "none"
        w2.style.display = "none"
        w3.style.display = "none"
        w4.style.display = "none"
        w5.style.display = "none"
        w6.style.display = "none"
        w7.style.display = "none"
        w8.style.display = "none"
        inn.style.marginTop = "unset"
        scoreboard.style.marginTop = "25px"
}

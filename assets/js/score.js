localStorage.setItem("scoring","");
localStorage.setItem("clicking","");

var score = 0;
var clickValue = 1;
var multiplier = 1;

function scoreDisplay (){
    document.getElementById('score-display').innerHTML = score;
}

function multiplierDisplay (){
    document.getElementById('multiplier').innerHTML = score;
}

function cookieCount() {
    score += clickValue;
}

document.getElementById('clicker').addEventListener('click', cookieCount); 
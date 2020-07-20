let scoreArea = document.getElementById('score');
let click = document.getElementById('click');

let autoBtn = document.getElementById('auto');
let aCost = document.getElementById('a-cost');

let multiplierBtn = document.getElementById('multiplier');
let mCost = document.getElementById('m-cost');

let bonusBtn = document.getElementById('bonus');
let bCost = document.getElementById('b-cost');


localStorage.setItem('score', '0');
localStorage.setItem('auto', '0');
localStorage.setItem('multiplier', '0');

let bonusPrice = 1000;
let bonusTime = 30000;

let isBonusActive = false;


function getCost(x) {
    return Math.pow(2, x);
}

function bonusDisp() {
    bCost.innerHTML = "The bonus costs : " + bonusPrice;
  }

function bonusTimeDisp(){
    bonusBtn.value = "Bonus remaining time : "+ bonusTime + " seconds!"
}

function bonusActivator() {
    if (score>=bonusPrice && !isBonusActive){
        bonusBtn.disabled = false;
    } else {
        bonusBtn.disabled = true;
    }
}

function bonusEnable() {
    score -= bonusPrice;
    isBonusActive = true;
    bonusBtn.disabled = true;
    //put here the display function ! 
    //put the value of bonus here ! 
    bonusTimeDisp();
  }
  
function bonusDisable() {
    bonusOn = false;
    bonusTime = 30;
    //should the click value = multiplier?
    bonusDisp();
  }

function bonusTimer() {
    if (isBonusActive) {
      --bonusTime;
      bonusTimeDisp();
      if (bonusTime === 0) {
        bonusDisable();
      }
    }
  }


bonusDisp();

bonusInterval = window.setInterval(bonusTimer, 1000);

click.addEventListener('click', increaseScore);
autoBtn.addEventListener('click', buyAuto);
multiplierBtn.addEventListener('click', buyMultiplier);
bonusBtn.addEventListener('click', bonusEnable);
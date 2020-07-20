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

var bonusPrice


function getCost(x) {
    return Math.pow(2, x);
}

function bonusDisp() {
    bonusBtn.value = "The bonus costs : " + bCost;
  }
  
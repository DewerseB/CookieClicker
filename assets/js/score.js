let score = document.getElementById('score');
let click = document.getElementById('click');

let auto = document.getElementById('auto');
let aCost = document.getElementById('a-cost');

let multiplier = document.getElementById('multiplier');
let mCost = document.getElementById('m-cost');

let bonus = document.getElementById('bonus');
let bCost = document.getElementById('b-cost');


localStorage.setItem('score', '0');
localStorage.setItem('auto', '0');
localStorage.setItem('multiplier', '0');

var bonusPrice


function getCost(x) {
    return Math.pow(2, x);
}

function bonusDisp() {
    bonus.value = "" + bonusCost + ')';
  }
  
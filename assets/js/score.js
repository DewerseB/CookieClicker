let scoreArea = document.getElementById('score');
let click = document.getElementById('click');

let autoBtn = document.getElementById('auto');
let aCost = document.getElementById('a-cost');

let multiplierBtn = document.getElementById('multiplier');
let mCost = document.getElementById('m-cost');

let bonusBtn = document.getElementById('bonus');
let bCost = document.getElementById('b-cost');



click.addEventListener('click', increaseScore);
autoBtn.addEventListener('click', buyAuto);
multiplierBtn.addEventListener('click', buyMultiplier);
bonusBtn.addEventListener('click', buyBonus);


if (score.innerHTML === "") {
    localStorage.setItem('score', '0');
    localStorage.setItem('auto', '0');
    localStorage.setItem('multiplier', '0');
}



function getCost(x) {
    return Math.pow(2, x);
}



function increaseScore() {

}



function buyAuto() {
    let score = parseInt(localStorage.getItem('score'), 10);
    let auto = parseInt(localStorage.getItem('auto'), 10);
    score = score - getCost(auto);
    auto++;
    localStorage.setItem("auto", auto);
    localStorage.setItem("score", score);
    refreshDisplay();
}


function buyMultiplier() {

}



function buyBonus() {

}
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
    let autoBuy = localStorage.getItem('auto');
    for (let i = 1; i <= auto, i++){
    refreshDisplay();
    }

    let autoBuy = localStorage.getItem('score');
    getCost(x) 
    for (let x = 1; x <= auto, x--){
        refreshDisplay();
    }
}


function buyMultiplier() {

}



function buyBonus() {

}
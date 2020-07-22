let clickBtn = document.getElementById('click');
let autoBtn = document.getElementById('auto');
let multiplierBtn = document.getElementById('multiplier');
let bonusBtn = document.getElementById('bonus');

let bonusPrice = 1000;
let bonusTime = 30;
let isBonusActive = false;
let interval;

clickBtn.addEventListener('click', increaseScore);
autoBtn.addEventListener('click', buyAuto);
multiplierBtn.addEventListener('click', buyMultiplier);
bonusBtn.addEventListener('click', buyBonus);

// Initialization
if (window.localStorage.length === 0) {
    localStorage.setItem('score', '0');
    localStorage.setItem('auto', '0');
    localStorage.setItem('multiplier', '0');
}
refreshDisplay();
setInterval(autoClick, 1000);


/**
 * Updates all the values on the page.
 */
function refreshDisplay() {
    document.getElementById('score').innerHTML = localStorage.getItem('score');
    autoBtn.value = 'Autoclick/sec: ' + localStorage.getItem('auto');
    autoBtn.disabled = isNotAffordable('auto');
    document.getElementById('a-cost').innerHTML = getCost(localStorage.getItem('auto')) + ' point(s)';
    multiplierBtn.value = 'Bonus multiplier: ' + localStorage.getItem('multiplier');
    multiplierBtn.disabled = isNotAffordable('multiplier');
    document.getElementById('m-cost').innerHTML = getCost(localStorage.getItem('multiplier')) + ' point(s)';
    (parseInt(localStorage.getItem('score'), 10) >= bonusPrice && !isBonusActive) ? bonusBtn.disabled = false : bonusBtn.disabled = true;
}


/**
 * Check if an upgrade is NOT affordable.
 * 
 * @param {string} upgradeName the name of the upgrade
 * 
 * @return {boolean}
 */
function isNotAffordable(upgradeName) {
    let score = parseInt(localStorage.getItem('score'), 10);
    let upgrade = parseInt(localStorage.getItem(upgradeName), 10);
    if (score >= getCost(upgrade)) {
        return false;
    } else {
        return true;
    }
}


/**
 * Calculates the cost of the next upgrade.
 * 
 * @param {number} upgradeNb the number of upgrade owned
 * 
 * @return {number} the cost of the next upgrade
 */
function getCost(upgradeNb) {
    return Math.pow(2, parseInt(upgradeNb, 10));
}


/**
 * Decreases the score by the number provided.
 * 
 * @param {number} x the price to pay
 */
function pay(x) {
    let score = parseInt(localStorage.getItem('score'), 10);
    score = score - x;
    localStorage.setItem('score', score);
}


/**
 * Increases the score an amount of time equals to the number of autoclick upgrade.
 */
function autoClick() {
    let auto = localStorage.getItem('auto');
    for (let i = 1; i <= auto; i++) {
        increaseScore();
    }
}


function increaseScore() {
    let score = parseInt(localStorage.getItem('score'), 10);
    let multiplier = parseInt(localStorage.getItem('multiplier'), 10);
    let bonus;
    isBonusActive ? bonus = 2 : bonus = 1;
    let gain = 1 * (multiplier + 1) * bonus;
    score = score + gain;
    localStorage.setItem('score', score);
    refreshDisplay();
}


function buyAuto() {
    let auto = parseInt(localStorage.getItem('auto'), 10);
    pay(getCost(auto));
    auto++;
    localStorage.setItem("auto", auto);
    refreshDisplay();
}


function buyMultiplier() {
    let multiplier = parseInt(localStorage.getItem('multiplier'), 10);
    pay(getCost(multiplier));
    multiplier++;
    localStorage.setItem("multiplier", multiplier);
    refreshDisplay();
}


function buyBonus() {
    pay(bonusPrice);
    isBonusActive = true;
    bonusBtn.disabled = true;
    document.getElementById("bonus-img").className = "lic-anim";
    refreshDisplay();
    interval = setInterval(bonusTimer, 1000);
}

function bonusTimer() {
    if (bonusTime > 0) {
        bonusTime--;
        bonusBtn.value = bonusTime + " seconds remaining!"
    } else {
        bonusTime = 30;
        isBonusActive = false;
        bonusBtn.disabled = false;
        document.getElementById("bonus-img").classList.remove("lic-anim");
        clearInterval(interval);
        bonusBtn.value = "200% score for 30s";
        refreshDisplay();
    }
}
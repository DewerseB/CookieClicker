// Global variables
let clickBtn = document.getElementById('click');
let autoBtn = document.getElementById('auto');
let multiplierBtn = document.getElementById('multiplier');
let bonusBtn = document.getElementById('bonus');

let bonusPrice = 1000;
let bonusTime = 30;
let isBonusActive = false;
let interval;


// Event listeners
clickBtn.addEventListener('click', increaseScore);
autoBtn.addEventListener('click', buyAuto);
multiplierBtn.addEventListener('click', buyMultiplier);
bonusBtn.addEventListener('click', buyBonus);
document.getElementById('reset').addEventListener('click', reset);


// Initialization
if (window.localStorage.length === 0) {
    localStorage.setItem('score', '0');
    localStorage.setItem('auto', '0');
    localStorage.setItem('multiplier', '0');
}
refreshDisplay();
setInterval(autoClick, 1000);


// Core functions

/**
 * Calls increaseScore() an amount of time equals to the number of autoclick upgrade to simulate autoclicks.
 */
function autoClick() {
    let auto = localStorage.getItem('auto');
    for (let i = 1; i <= auto; i++) {
        increaseScore();
    }
}

/**
 * Increase the score based on the multiplier value, and the bonus if activated.
 * Used by the user when clicking the unicorn and by the autoClick().
 */
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

/**
 * Buy an autoclick upgrade and decrease the score by the price.
 * Called by a click on the 'auto' button.
 */
function buyAuto() {
    let auto = parseInt(localStorage.getItem('auto'), 10);
    pay(getCost(auto));
    auto++;
    localStorage.setItem("auto", auto);
    refreshDisplay();
}

/**
 * Buy a multiplier upgrade and decrease the score by the price.
 * Called by a click on the 'multiplier' button.
 */
function buyMultiplier() {
    let multiplier = parseInt(localStorage.getItem('multiplier'), 10);
    pay(getCost(multiplier));
    multiplier++;
    localStorage.setItem("multiplier", multiplier);
    refreshDisplay();
}

/**
 * Activates the bonus and the bonus animation, and decrease the score by the price.
 * Calls bonusTimer() every second.
 * Called by a click on the 'bonus' button.
 */
function buyBonus() {
    pay(bonusPrice);
    isBonusActive = true;
    document.getElementById("bonus-img").className = "lic-anim";
    refreshDisplay();
    interval = setInterval(bonusTimer, 1000);
}

/**
 * Decreases the bonus remaining time and update the display on the button.
 * Stops the bonus by calling stopBonus() when bonusTime reachs 0.
 */
function bonusTimer() {
    if (bonusTime > 0) {
        bonusTime--;
        bonusBtn.value = bonusTime + " seconds remaining!"
    } else {
        stopBonus();
        refreshDisplay();
    }
}

/**
 * Resets the game by stopping the bonus and settings all the variables
 * in the local storage to 0.
 */
function reset() {
    stopBonus();
    localStorage.setItem('score', '0');
    localStorage.setItem('auto', '0');
    localStorage.setItem('multiplier', '0');
    refreshDisplay();
}


// Utility functions

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
 * Deactivates the bonus and the bonus animation.
 * Resets the bonusTime value to 30s and the button display.
 */
function stopBonus() {
    bonusTime = 30;
    isBonusActive = false;
    document.getElementById("bonus-img").classList.remove("lic-anim");
    clearInterval(interval);
    bonusBtn.value = "200% score for 30s";
}

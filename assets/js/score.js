score = document.getElementById('score');
auto = document.getElementById('auto');
multiplier = document.getElementById('multiplier');


localStorage.setItem('score', '0');
localStorage.setItem('auto', '0');
localStorage.setItem('multiplier', '0');


function getCost(x) {
    return Math.pow(2, x);
}
score = document.getElementById('score');
click = document.getElementById('click');
auto = document.getElementById('auto');
multiplier = document.getElementById('multiplier');
bonus = document.getElementById('bonus');

click.addEventListener('click', increaseScore);
auto.addEventListener('click', buyAuto);
multiplier.addEventListener('click', buyMultiplier);
bonus.addEventListener('click', buyBonus);


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

}



function buyMultiplier() {

}



function buyBonus() {

}
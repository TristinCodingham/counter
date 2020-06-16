let scoreVal = 0;
const scoreDiv = document.getElementById('score');

const increase = document.querySelector('#increase');
const reset = document.querySelector('#reset');
const decrease = document.querySelector('#decrease');

const handleColours = () => {
    if(scoreVal >= 1)
        scoreDiv.style.color = "lightgreen";
    else if(scoreVal <= -1)
        scoreDiv.style.color = "crimson";
    else
        scoreDiv.style.color = "gray"
}

const incrementer = () => {
    scoreVal += 1;
    scoreDiv.innerHTML = scoreVal;
    handleColours();
}

const resetter = () => {
    scoreVal = 0;
    scoreDiv.innerHTML = scoreVal;
    handleColours();
}

const decrementer = () => {
    scoreVal -= 1;
    scoreDiv.innerHTML = scoreVal;
    handleColours();
}

increase.onclick = incrementer;
reset.onclick = resetter;
decrease.onclick = decrementer;

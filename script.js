'use strict';
let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
// document.querySelector('.number').textContent = secretNumber;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess,typeof guess);
    let msg = document.querySelector('.message');
    if(!guess) {
        displayMessage('⛔ no number');
    } else if(secretNumber === guess) {
        console.log(Number(document.querySelector('.highscore').textContent), score);
        if(Number(document.querySelector('.highscore').textContent) < score || Number(document.querySelector('.highscore').textContent) === 0){
            document.querySelector('.highscore').textContent = score;
        }
        displayMessage('🎉Correct Number');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = 'rgb(38, 179, 85)';
        document.querySelector('.number').style.width = '30rem';
    }
    else if (secretNumber !== guess) {
        if(score > 1){
            score--;
            document.querySelector('.score').textContent = score;
            displayMessage((secretNumber < guess) ? 'Too high!' : 'Too low!')
        } else {
            displayMessage('😟 You lost')
            document.querySelector('.score').textContent = 0;
        }
    }
});


document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) + 1;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.score').textContent = 20  
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    displayMessage('Start guessing...');
});

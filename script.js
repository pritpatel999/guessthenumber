'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = "🎉Correct Number";

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 1;

// //for input type we have to use a value instead of textContent
// document.querySelector('.guess').value = 12;
// console.log(document.querySelector('.guess').value);

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
        // msg.textContent = '⛔ no number';
        displayMessage('⛔ no number');
    } else if(secretNumber === guess) {
        console.log(Number(document.querySelector('.highscore').textContent), score);
        if(Number(document.querySelector('.highscore').textContent) < score || Number(document.querySelector('.highscore').textContent) === 0){
            document.querySelector('.highscore').textContent = score;
        }
        displayMessage('🎉Correct Number');
        // msg.textContent = '🎉Correct Number';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = 'rgb(38, 179, 85)';
        document.querySelector('.number').style.width = '30rem';
    }
    //  else if(secretNumber < guess) {
    //     if(score > 1) {
    //         msg.textContent = 'Too high!';
    //         score--;
    //         document.querySelector('.score').textContent = score;        
    //     } else {
    //         msg.textContent = '😟 You lost';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // } else if (secretNumber > guess) {
    //     if(score > 1) {
    //         msg.textContent = 'Too low!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         msg.textContent = '😟 You lost';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // } 
    else if (secretNumber !== guess) {
        if(score > 1){
            score--;
            document.querySelector('.score').textContent = score;
            displayMessage((secretNumber < guess) ? 'Too high!' : 'Too low!')
            // msg.textContent = (secretNumber < guess) ? 'Too high!' : 'Too low!';
        } else {
            displayMessage('😟 You lost')
            // msg.textContent = '😟 You lost';
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
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
});
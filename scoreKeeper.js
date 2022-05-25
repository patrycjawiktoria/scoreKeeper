const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btnReset = document.querySelector('#btnReset');
const score1 = document.querySelector('#p1Score');
const score2 = document.querySelector('#p2Score');
const playto = document.querySelector('#playto')

 let p1Score = 0;
 let p2Score = 0;
 let winningScore = 3; 
 let isGameOver = false;

 btn1.addEventListener('click', function () {
     if (!isGameOver) {
         p1Score += 1;
         if (p1Score === winningScore) {
             isGameOver = true;
             score1.classList.add('winner');
             score2.classList.add('loser');
     }
     score1.textContent = p1Score;
     }
 })

 btn2.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            isGameOver = true;
            score2.classList.add('winner');
            score1.classList.add('loser');
             
    }
    score2.textContent = p2Score;
    }
})

playto.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

btnReset.addEventListener('click', reset);


function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0
    score1.textContent = 0;
    score2.textContent = 0;
    score1.classList.remove('winner', 'loser');
    score2.classList.remove('winner', 'loser');
}
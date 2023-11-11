let guestScore = 0;
let homeScore = 0;
let timeInSeconds = 59;

function incrementHomeScore(incrementAmount){
    let score = document.getElementById("home-score-display");
    homeScore += incrementAmount;
    score.innerText = homeScore;
    checkHigherScore();
}

function incrementGuestScore(incrementAmount){
    let score = document.getElementById("guest-score-display");
    guestScore += incrementAmount;
    score.innerText = guestScore;
    checkHigherScore();
}

function checkHigherScore(){
    let guestWinningScore = document.getElementById("guest-score-display");
    let guestWinningScoreTitle = document.getElementById("guest-title");
    let homeWinningScore = document.getElementById("home-score-display");
    let homeWinningScoreTitle = document.getElementById("home-title");
    if (guestScore > homeScore){
        guestWinningScoreTitle.style.color = 'red';
        homeWinningScoreTitle.style.color = 'white';
        guestWinningScore.style.border = '2px solid red';
        homeWinningScore.style.border = ''
    } else if (guestScore < homeScore) {
        homeWinningScoreTitle.style.color = 'red';
        guestWinningScoreTitle.style.color = 'white';
        homeWinningScore.style.border = '2px solid red';
        guestWinningScore.style.border = ''
    }
}
  
function updateTimer() {
    document.getElementById('game-timer').innerText = timeInSeconds;

    if (timeInSeconds > 0) {
        timeInSeconds--;
    } else {
        document.getElementById('game-timer').innerText = "Game Over"

    }
}

function restartGame() {
    let guestWinningScore = document.getElementById("guest-score-display");
    let guestWinningScoreTitle = document.getElementById("guest-title");
    let homeWinningScore = document.getElementById("home-score-display");
    let homeWinningScoreTitle = document.getElementById("home-title");
    let score = document.getElementById("guest-score-display");
    
    timeInSeconds = 59;
    guestScore = 0;
    homeScore = 0;
    guestWinningScoreTitle.style.color = 'white';
    homeWinningScoreTitle.style.color = 'white';
    homeWinningScore.style.border = ''
    guestWinningScore.style.border = ''
    guestWinningScore.innerText = guestScore;
    homeWinningScore.innerText = homeScore;
}
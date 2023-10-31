const totalScore = { computerScore: 0, playerScore: 0 };

function getComputerChoice() {
  const rpsChoice = ["Rock", "Paper", "Scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return rpsChoice[randomNumber];
}
console.log(getComputerChoice());

function getResult(playerChoice, computerChoice) {
  let score;
  if (playerChoice == computerChoice) {
    score = 0;
  } else if (playerChoice == "Rock" && computerChoice == "Scissors") {
    score = 1;
  } else if (playerChoice == "Paper" && computerChoice == "Rock") {
    score = 1;
  } else if (playerChoice == "Scissors" && computerChoice == "Paper") {
    score = 1;
  } else {
    score = -1;
  }

  return score;
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  const resultDiv = document.getElementById("result");
  const handsDiv = document.getElementById("hands");
  const playerScoreDiv = document.getElementById("player-score");
  if (score == -1) {
    resultDiv.innerHTML = "You Lose!!!!!! ";
  } else if (score == 0) {
    resultDiv.innerHTML = "Its a tie!!!!!";
  } else {
    resultDiv.innerHTML = "You Won!!!!!!!!";
  }
  handsDiv.innerText = `Player = ${playerChoice} vs Computer = ${computerChoice}`;
  playerScoreDiv.innerText = `Your Score: ${totalScore["playerScore"]}`;
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  console.log(playerChoice);
  const computerChoice = getComputerChoice();

  console.log({ computerChoice });
  const score = getResult(playerChoice, computerChoice);
  totalScore["playerScore"] += score;
  console.log({ score });
  showResult(score, playerChoice, computerChoice);
}

// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
  const rpsButtons = document.querySelectorAll(".rpsButton");
  rpsButtons.forEach((rpsButtons) => {
    rpsButtons.onclick = () => onClickRPS(rpsButtons.value);
  });
}

// ** endGame function clears all the text on the DOM **
function endGame() {}

playGame();

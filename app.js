const totalScore = { computerScore: 0, playerScore: 0 };
const op = {
  ROCK: "ROCK",
  PAPER: "PAPER",
  SCISSOR: "SCISSOR",
};

function getComputerChoice() {
  const rpsChoice = [op.ROCK, op.PAPER, op.SCISSOR];
  const randomNumber = Math.floor(Math.random() * 3);
  return rpsChoice[randomNumber];
}

function getResult(playerChoice, computerChoice) {
  let score;
  if (playerChoice == computerChoice) {
    score = 0;
  } else if (playerChoice == op.ROCK && computerChoice == op.SCISSOR) {
    score = 1;
  } else if (playerChoice == op.PAPER && computerChoice == op.ROCK) {
    score = 1;
  } else if (playerChoice == op.SCISSOR && computerChoice == op.PAPER) {
    score = 1;
  } else {
    score = -1;
  }
  return score;
}

function showResult(score, playerChoice, computerChoice) {
  const resultDiv = document.getElementById("result");
  const handsDiv = document.getElementById("hands");
  const playerScoreDiv = document.getElementById("player-score");
  const computerScoreDiv = document.getElementById("computer-score");
  if (score == -1) {
    resultDiv.innerHTML = "You Lose!!!!!! ";
  } else if (score == 0) {
    resultDiv.innerHTML = "Its a tie!!!!!";
  } else {
    resultDiv.innerHTML = "You Won!!!!!!!!";
  }
  handsDiv.innerText = `Your = ${playerChoice} vs Computer = ${computerChoice}`;
  playerScoreDiv.innerText = `Your Score: ${totalScore["playerScore"]}`;
  computerScoreDiv.innerText = `Computer Score: ${totalScore["computerScore"]}`;
}

function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice();
  const score = getResult(playerChoice, computerChoice);
  console.log({ score });
  if (score) {
    totalScore["playerScore"] += score;
    totalScore["computerScore"] -= score;
  } else {
    totalScore["playerScore"] -= score;
    totalScore["computerScore"] += score;
  }
  showResult(score, playerChoice, computerChoice);
}

function playGame() {
  const rpsButtons = document.querySelectorAll(".rpsButton");
  rpsButtons.forEach((rpsButtons) => {
    rpsButtons.onclick = () => onClickRPS(rpsButtons.value);
  });
  const endGameButton = document.getElementById("endGameButton");
  endGameButton.onclick = () => endGame(totalScore);
}

function endGame(totalScore) {
  totalScore["playerScore"] = 0;
  totalScore["computerScore"] = 0;

  const resultDiv = document.getElementById("result");
  const handsDiv = document.getElementById("hands");
  const playerScoreDiv = document.getElementById("player-score");
  const computerScoreDiv = document.getElementById("computer-score");

  resultDiv.innerText = "";
  handsDiv.innerText = "";
  playerScoreDiv.innerText = "";
  computerScoreDiv.innerText = "";
}

playGame();

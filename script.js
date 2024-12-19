// Human and CPU Scores and Weapons
let humanScore = 0;
let computerScore = 0;
let computerWeapon = "";

// Boolean value to recognize the game is over
let winner = false;

// List of weapons in an array
const weapons = ["rock", "paper", "scissors"];

const getComputerChoice = function () {
  // generate random # 1-3
  let randomNumber = Math.floor(Math.random() * 3);

  // use the number to choose a weapon
  computerWeapon = weapons[randomNumber];

  return computerWeapon;
};

const playRound = function (humanChoice, computerChoice) {
  // Human wins round
  if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You win! Rock beats scissors");
    humanScore++;
    humanScoreVis.textContent = humanScore;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You win! Paper beats rock");
    humanScore++;
    humanScoreVis.textContent = humanScore;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You win! Scissors beats paper");
    humanScore++;
    humanScoreVis.textContent = humanScore;
  }

  // Computer wins round
  if (computerChoice === "rock" && humanChoice === "scissors") {
    console.log("You lose! Rock beats scissors");
    computerScore++;
    cpuScoreVis.textContent = computerScore;
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    console.log("You lose! Paper beats rock");
    computerScore++;
    cpuScoreVis.textContent = computerScore;
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    console.log("You lose! Scissors beats paper");
    computerScore++;
    cpuScoreVis.textContent = computerScore;
  }

  // Round ends in a tie
  if (
    (humanChoice === "rock" && computerChoice === "rock") ||
    (humanChoice === "paper" && computerChoice === "paper") ||
    (humanChoice === "scissors" && computerChoice === "scissors")
  ) {
    console.log("It's a tie! Go again!");
  }

  // Human weapon is invalid
  if (
    humanChoice !== "rock" &&
    humanChoice !== "paper" &&
    humanChoice !== "scissors"
  ) {
    console.log("Invalid weapon");
  }

  console.log("Human Weapon: " + humanChoice);
  console.log("Computer Weapon: " + computerChoice);
  console.log(
    `SCORE - Human Score: ${humanScore}`,
    `Computer score: ${computerScore}`
  );
};

// Checks for a winner
function checkWinner(humanScore, computerScore) {
  if (humanScore === 5) {
    winner = true;
    console.log("GAME OVER! USER WINS!");
    alert("YOU WON! GGs MY GUY.");
  } else if (computerScore === 5) {
    winner = true;
    console.log("GAME OVER! COMPUTER WINS!");
    alert("YOU LOST! BETTER LUCK NEXT TIME MY GUY.");
  }

  if (winner === true) {
    humanChoice.querySelector("#rock").disabled = true;
    humanChoice.querySelector("#paper").disabled = true;
    humanChoice.querySelector("#scissors").disabled = true;
  }
}
const playGame = function () {
  while (winner === false) {
    playRound(getHumanChoice(), getComputerChoice());
    checkWinner(humanScore, computerScore);
  }
};

// playGame();

let humanChoice = document.querySelector("#weapons");
let humanScoreVis = document.querySelector("#player-score");
let cpuScoreVis = document.querySelector("#cpu-score");

humanChoice.addEventListener("click", (event) => {
  let target = event.target;

  switch (target.id) {
    case "rock":
      console.log("Rock was chosen");
      playRound("rock", getComputerChoice());
      checkWinner(humanScore, computerScore);
      break;
    case "paper":
      console.log("Paper was chosen");
      playRound("rock", getComputerChoice());
      checkWinner(humanScore, computerScore);
      break;
    case "scissors":
      console.log("Scissors was chosen");
      playRound("rock", getComputerChoice());
      checkWinner(humanScore, computerScore);
      break;
  }
});

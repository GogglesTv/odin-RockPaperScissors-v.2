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
    roundResult.textContent = "You win! Rock beats scissors";
    humanScore++;
    humanScoreVis.textContent = humanScore;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    roundResult.textContent = "You win! Paper beats rock";
    humanScore++;
    humanScoreVis.textContent = humanScore;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    roundResult.textContent = "You win! Scissors beats paper";
    humanScore++;
    humanScoreVis.textContent = humanScore;
  }

  // Computer wins round
  if (computerChoice === "rock" && humanChoice === "scissors") {
    roundResult.textContent = "You lose! Rock beats scissors";
    computerScore++;
    cpuScoreVis.textContent = computerScore;
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    roundResult.textContent = "You lose! Paper beats rock";
    computerScore++;
    cpuScoreVis.textContent = computerScore;
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    roundResult.textContent = "You lose! Scissors beats pape";
    computerScore++;
    cpuScoreVis.textContent = computerScore;
  }

  // Round ends in a tie
  if (
    (humanChoice === "rock" && computerChoice === "rock") ||
    (humanChoice === "paper" && computerChoice === "paper") ||
    (humanChoice === "scissors" && computerChoice === "scissors")
  ) {
    roundResult.textContent = "It's a tie! Go again!";
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
    roundResult.textContent = "YOU WON! GGs MY GUY.";
  } else if (computerScore === 5) {
    winner = true;
    console.log("GAME OVER! COMPUTER WINS!");
    roundResult.textContent = "YOU LOST! BETTER LUCK NEXT TIME MY GUY.";
  }

  if (winner === true) {
    humanChoice.querySelector("#rock").disabled = true;
    humanChoice.querySelector("#paper").disabled = true;
    humanChoice.querySelector("#scissors").disabled = true;
  }
}

let humanChoice = document.querySelector("#weapons");
let humanScoreVis = document.querySelector("#player-score");
let cpuScoreVis = document.querySelector("#cpu-score");
let roundResult = document.querySelector("#game-results");

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

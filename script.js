// Human and CPU Scores
let humanScore = 0;
let computerScore = 0;
let humanWeapon = "";
let computerWeapon = "";
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

const getHumanChoice = function () {
  humanWeapon = prompt("Rock, Paper, or Scissors?").toLowerCase();

  return humanWeapon;
};

const playRound = function (humanChoice, computerChoice) {
  // Human wins round
  if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You win! Rock beats scissors");
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You win! Paper beats rock");
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You win! Scissors beats paper");
    humanScore++;
  }

  // Computer wins round
  if (computerChoice === "rock" && humanChoice === "scissors") {
    console.log("You lose! Rock beats scissors");
    computerScore++;
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    console.log("You lose! Paper beats rock");
    computerScore++;
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    console.log("You lose! Scissors beats paper");
    computerScore++;
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
  if (humanScore === 3) {
    winner = true;
    console.log("GAME OVER! USER WINS!");
    alert("YOU WON!");
  } else if (computerScore === 3) {
    winner = true;
    console.log("GAME OVER! COMPUTER WINS!");
    alert("YOU LOSS! BETTER LUCK NEXT TIME MY GUY.");
  }
}
const playGame = function () {
  while (winner === false) {
    playRound(getHumanChoice(), getComputerChoice());
    checkWinner(humanScore, computerScore);
  }
};

playGame();

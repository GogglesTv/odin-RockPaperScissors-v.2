// Human and CPU Scores
let humanScore = 0;
let computerScore = 0;

// List of weapons in an array
const weapons = ["rock", "paper", "scissors"];

const getComputerChoice = function () {
  // generate random # 1-3
  let randomNumber = Math.floor(Math.random() * 3);

  // use the number to choose a weapon
  let computerWeapon = weapons[randomNumber];

  return computerWeapon;
};
const computerSelection = getComputerChoice();

const getHumanChoice = function () {
  let humanWeapon = prompt("Rock, Paper, or Scissors?");

  return humanWeapon;
};
const humanSelection = getHumanChoice();

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

  console.log("Human Weapon: " + humanChoice);
  console.log("Computer Weapon: " + computerChoice);
};
playRound(humanSelection, computerSelection);

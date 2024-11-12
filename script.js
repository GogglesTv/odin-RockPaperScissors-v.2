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
  if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You win! Rock beats scissors");
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You win! Paper beats rock");
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You win! Scissors beats paper");
  }

  console.log("Human Weapon: " + humanChoice);
  console.log("Computer Weapon: " + computerChoice);
};
playRound(humanSelection, computerSelection);

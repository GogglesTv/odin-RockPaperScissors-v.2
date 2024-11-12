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

const getHumanChoice = function () {
  let humanWeapon = prompt("Rock, Paper, or Scissors?");

  console.log(humanWeapon);
  return humanWeapon;
};
getHumanChoice();

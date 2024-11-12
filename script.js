// List of weapons in an array
const weapons = ["Rock", "Paper", "Scissors"];

const getComputerChoice = function () {
  // generate random # 1-3
  let randomNumber = Math.floor(Math.random() * 3);
  console.log(randomNumber);

  // use the number to choose a weapon
  return weapons[randomNumber];
};
getComputerChoice();

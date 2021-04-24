// VARIABLES
var player = new Player({})
var currentGame = new Game()

var classicGameButton = document.querySelector('.classic-game-button')
var elementalGameButton = document.querySelector('.elemental-game-button')
var classicGame = document.querySelector('.classic-game')
var gameChoice = document.querySelector('.game-choice')

var resultsText = document.querySelector('#resultsText')

// weapons
var rockImg = document.querySelector('#rock')
var paperImg = document.querySelector('#paper')
var scissorsImg = document.querySelector('#scissors')

var results = document.querySelector("#results")
var classicHumanWeapon = document.getElementById('classicHumanWeapon')
var classicComputerWeapon = document.getElementById('classicComputerWeapon')

// EVENT LISTENERS
classicGameButton.addEventListener('click', function() {
  toggleHidden(classicGame, gameChoice)
  currentGame.gameType = "classic"
})

rockImg.addEventListener('click', startGame)

paperImg.addEventListener('click', startGame)

scissorsImg.addEventListener('click', startGame)

gameChoice.addEventListener('click', function(event) {
  displayChoices(event)
})

function displayChoices() {
  var gameType = event.target.id
  if (gameType === 'classic') {
    toggleHidden(classicGame, gameChoice)
  } else if (gameType === 'elemental') {
    toggleHidden(classicGame, gameChoice)
  }
}

// FUNCTIONS
function toggleHidden(element1, element2) {
  element1.classList.toggle('hidden')
  element2.classList.toggle('hidden')
}

function startGame(event) {
  currentGame.human.currentWeapon = event.target.id
  displayComputerWeapon()
  var result = currentGame.evaluateGame()
  resultsText.innerText = `${result}`
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function displayHumanWeapon() {
  var humanWeapon = currentGame.human.currentWeapon
  if (humanWeapon === "rock") {
    document.getElementById("classicHumanWeapon").src = "assets/rock-weapon.png";
  } else if (humanWeapon === "paper") {
    document.getElementById("classicHumanWeapon").src = "assets/paper-weapon.png";
  } else if (humanWeapon === "scissors") {
    document.getElementById("classicHumanWeapon").src = "assets/scissors-weapon.png";
  }
}

function displayComputerWeapon() {
  currentGame.computer.currentWeapon = currentGame.classicWeapons[getRandomIndex(currentGame.classicWeapons)]
  var computerWeapon = currentGame.computer.currentWeapon
  console.log(currentGame.human.currentWeapon);
  console.log(currentGame.computer.currentWeapon);
  toggleHidden(classicGame, results)
  if (computerWeapon === "rock") {
    document.getElementById("classicComputerWeapon").src = "assets/rock-weapon.png";
  } else if (computerWeapon === "paper") {
    document.getElementById("classicComputerWeapon").src = "assets/paper-weapon.png";
  } else if (computerWeapon === "scissors") {
    document.getElementById("classicComputerWeapon").src = "assets/scissors-weapon.png";
  }
  displayHumanWeapon()
}

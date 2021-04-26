// VARIABLES
var currentGame = new Game()

var classicGame = document.getElementById('classicGame')
var elementalGame = document.getElementById('elementalGame')
var gameChoice = document.querySelector('.game-choice')
var changeGameButton = document.getElementById('changeGameButton')
var resultsText = document.querySelector('#resultsText')
var humanWins = document.getElementById('humanWins')
var computerWins = document.getElementById('computerWins')
var rockImg = document.querySelector('#rock')
var paperImg = document.querySelector('#paper')
var scissorsImg = document.querySelector('#scissors')
var fireImg = document.querySelector('#fire')
var waterImg = document.querySelector('#water')
var airImg = document.querySelector('#air')
var earthImg = document.querySelector('#earth')
var etherImg = document.querySelector('#ether')
var results = document.querySelector("#results")
var chosenHumanWeapon = document.getElementById('chosenHumanWeapon')
var chosenComputerWeapon = document.getElementById('chosenComputerWeapon')


// EVENT LISTENERS
gameChoice.addEventListener('click', function(event) {
  displayChoices(event)
})

window.addEventListener('load', displayStorage)

changeGameButton.addEventListener('click', changeGame)

// **** IMRPOVE EVENT BUBBLING
rockImg.addEventListener('click', runGame)
paperImg.addEventListener('click', runGame)
scissorsImg.addEventListener('click', runGame)

fireImg.addEventListener('click', runGame)
waterImg.addEventListener('click', runGame)
airImg.addEventListener('click', runGame)
earthImg.addEventListener('click', runGame)
etherImg.addEventListener('click', runGame)

// FUNCTIONS
function displayStorage() {
  currentGame.human.retrieveWinsFromStorage(),
  currentGame.computer.retrieveWinsFromStorage(),
  updateScoreDisplay()
}

function toggleHidden(element1, element2, element3) {
  element1.classList.toggle('hidden')
  element2.classList.toggle('hidden')
  element3.classList.toggle('hidden')
}

function displayChoices(event) {
  var gameType = event.target.id
  currentGame.setGameType(gameType)
  if (gameType === 'classic') {
    toggleHidden(classicGame, gameChoice, changeGameButton)
  } else if (gameType === 'elemental') {
    toggleHidden(elementalGame, gameChoice, changeGameButton)
  }
}

function changeGame() {
  if (currentGame.gameType === 'classic') {
    toggleHidden(classicGame, gameChoice, changeGameButton)
  } else if (currentGame.gameType === 'elemental'){
    toggleHidden(elementalGame, gameChoice, changeGameButton)
  }
}

function runGame(event) {
  currentGame.human.setHumanWeapon(event.target.id)
  currentGame.computer.setComputerWeapon(currentGame.weapons)
  displayHumanWeapon()
  displayComputerWeapon()
  var result = currentGame.evaluateGame()
  resultsText.innerText = `${result}`
  updateScoreDisplay()
  currentGame.switchTurn()
}

function displayHumanWeapon() {
  var humanWeapon = currentGame.human.currentWeapon
  if (humanWeapon === "rock") {
    document.getElementById("chosenHumanWeapon").src = "assets/rock-weapon.png";
  } else if (humanWeapon === "paper") {
    document.getElementById("chosenHumanWeapon").src = "assets/paper-weapon.png";
  } else if (humanWeapon === "scissors") {
    document.getElementById("chosenHumanWeapon").src = "assets/scissors-weapon.png";
  } else if (humanWeapon === "fire") {
    document.getElementById("chosenHumanWeapon").src = "assets/fire-weapon.png";
  }else if (humanWeapon === "water") {
    document.getElementById("chosenHumanWeapon").src = "assets/water-weapon.png";
  }else if (humanWeapon === "air") {
    document.getElementById("chosenHumanWeapon").src = "assets/air-weapon.png";
  }else if (humanWeapon === "earth") {
    document.getElementById("chosenHumanWeapon").src = "assets/earth-weapon.png";
  }else if (humanWeapon === "ether") {
    document.getElementById("chosenHumanWeapon").src = "assets/ether-weapon.png";
  }
}

function displayComputerWeapon() {
  var computerWeapon = currentGame.computer.currentWeapon
  if (currentGame.gameType === 'classic') {
    toggleHidden(classicGame, results, changeGameButton)
  } else if (currentGame.gameType === 'elemental') {
    toggleHidden(elementalGame, results, changeGameButton)
  }
  if (computerWeapon === "rock") {
    document.getElementById("chosenComputerWeapon").src = "assets/rock-weapon.png";
  } else if (computerWeapon === "paper") {
    document.getElementById("chosenComputerWeapon").src = "assets/paper-weapon.png";
  } else if (computerWeapon === "scissors") {
    document.getElementById("chosenComputerWeapon").src = "assets/scissors-weapon.png";
  }else if (computerWeapon === "fire") {
    document.getElementById("chosenComputerWeapon").src = "assets/fire-weapon.png";
  }else if (computerWeapon === "water") {
    document.getElementById("chosenComputerWeapon").src = "assets/water-weapon.png";
  }else if (computerWeapon === "air") {
    document.getElementById("chosenComputerWeapon").src = "assets/air-weapon.png";
  }else if (computerWeapon === "earth") {
    document.getElementById("chosenComputerWeapon").src = "assets/earth-weapon.png";
  }else if (computerWeapon === "ether") {
    document.getElementById("chosenComputerWeapon").src = "assets/ether-weapon.png";
  }
}

function updateScoreDisplay() {
  humanWins.innerText = `Wins: ${currentGame.human.wins}`
  computerWins.innerText = `Wins: ${currentGame.computer.wins}`
  currentGame.human.saveWinsToStorage()
  currentGame.computer.saveWinsToStorage()
  currentGame.human.retrieveWinsFromStorage()
  currentGame.computer.retrieveWinsFromStorage()
}

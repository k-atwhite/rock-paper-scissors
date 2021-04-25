// VARIABLES
var player = new Player({})
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
var results = document.querySelector("#results")
var classicHumanWeapon = document.getElementById('classicHumanWeapon')
var classicComputerWeapon = document.getElementById('classicComputerWeapon')


// EVENT LISTENERS
gameChoice.addEventListener('click', function(event) {
  displayChoices(event)
})

// **** IMRPOVE EVENT BUBBLING
rockImg.addEventListener('click', runGame)
paperImg.addEventListener('click', runGame)
scissorsImg.addEventListener('click', runGame)

changeGameButton.addEventListener('click', changeGame)


// FUNCTIONS
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
  if (currentGame.gameType = 'classic') {
    toggleHidden(classicGame, gameChoice, changeGameButton)
  } else {
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
    document.getElementById("classicHumanWeapon").src = "assets/rock-weapon.png";
  } else if (humanWeapon === "paper") {
    document.getElementById("classicHumanWeapon").src = "assets/paper-weapon.png";
  } else if (humanWeapon === "scissors") {
    document.getElementById("classicHumanWeapon").src = "assets/scissors-weapon.png";
  }
}

function displayComputerWeapon() {
  var computerWeapon = currentGame.computer.currentWeapon
  toggleHidden(classicGame, results, changeGameButton)
  if (computerWeapon === "rock") {
    document.getElementById("classicComputerWeapon").src = "assets/rock-weapon.png";
  } else if (computerWeapon === "paper") {
    document.getElementById("classicComputerWeapon").src = "assets/paper-weapon.png";
  } else if (computerWeapon === "scissors") {
    document.getElementById("classicComputerWeapon").src = "assets/scissors-weapon.png";
  }
}

function updateScoreDisplay() {
  humanWins.innerText = `Wins: ${currentGame.human.wins}`
  computerWins.innerText = `Wins: ${currentGame.computer.wins}`
}

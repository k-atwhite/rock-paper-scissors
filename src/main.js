// VARIABLES
var currentGame = new Game()
var player = new Player()

var classicGameButton = document.querySelector('.classic-game-button')
var elementalGameButton = document.querySelector('.elemental-game-button')
var classicGame = document.querySelector('.classic-game')
var gameChoice = document.querySelector('.game-choice')

var infoText = document.querySelector('h2')

// weapons
var rockImg = document.querySelector('#rock')
var paperImg = document.querySelector('#paper')
var scissorsImg = document.querySelector('#scissors')

// EVENT LISTENERS
classicGameButton.addEventListener('click', function() {
  toggleHidden(classicGame, gameChoice)
  currentGame.gameType = "classic"
})

rockImg.addEventListener('click', startGame)

paperImg.addEventListener('click', startGame)

scissorsImg.addEventListener('click', startGame)

// FUNCTIONS
function toggleHidden(element1, element2) {
  element1.classList.toggle('hidden')
  element2.classList.toggle('hidden')
}

function startGame(event) {
  currentGame.human.currentWeapon = event.target.id
  computerChoice()
  currentGame.evaluateGame()
}

function computerChoice() {
  var randomNum =  Math.floor(Math.random() * 3);
  if (randomNum === 1) {
    computerWeapon = "rock"
  } else if (randomNum === 2) {
    computerWeapon = "paper"
  } else if (randomNum === 3) {
    computerWeapon = "scissors"
  }
  currentGame.computer.currentWeapon = computerWeapon
}

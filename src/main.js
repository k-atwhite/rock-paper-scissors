// VARIABLES
var currentGame = new Game()
var player = new Player()

var classicGameButton = document.querySelector('.classic-game-button')
var elementalGameButton = document.querySelector('.elemental-game-button')
var classicGame = document.querySelector('.classic-game')
var gameChoice = document.querySelector('.game-choice')

// weapons
var rockImg = document.querySelector('#rock')
var paperImg = document.querySelector('#paper')
var scissorsImg = document.querySelector('#scissors')

// EVENT LISTENERS
classicGameButton.addEventListener('click', function() {
  toggleHidden(classicGame, gameChoice)
})

rockImg.addEventListener('click', logWeapon)
paperImg.addEventListener('click', logWeapon)
scissorsImg.addEventListener('click', logWeapon)

// FUNCTIONS
function toggleHidden(element1, element2) {
  element1.classList.toggle('hidden')
  element2.classList.toggle('hidden')
}

function logWeapon(event) {
  var chosenWeapon = event.target.id
  return chosenWeapon
}

function determineWinner() {
}

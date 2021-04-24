class Game {
  constructor(gameType, stats) {
    this.gameType = gameType
    this.human =  new Player({name:'Human', token: '🤠'})
    this.computer = new Player({name: 'Computer', token: '🖥'})
    this.stats = {human: 0, computer: 0}
    this.classicWeapons = ['rock', 'paper' , 'scissors' ]
    this.elementalWeapons = ['fire', 'water', 'air', 'earth']
  }

  computerWins() {
    return "Computer Wins!"
  }

  humanWins() {
    return "Human Wins!"
  }

  evaluateGame() {
    if (this.human.currentWeapon === this.computer.currentWeapon) {
      return "It's a Draw!"
    } else if (this.human.currentWeapon === "rock" && this.computer.currentWeapon === "paper") {
      return this.computerWins()
    } else if (this.human.currentWeapon === "rock" && this.computer.currentWeapon === "scissors") {
      return this.humanWins()
    } else if (this.human.currentWeapon === "paper" && this.computer.currentWeapon === "scissors") {
      return this.computerWins()
    } else if (this.human.currentWeapon === "paper" && this.computer.currentWeapon === "rock") {
      return this.humanWins()
    } else if (this.human.currentWeapon === "scissors" && this.computer.currentWeapon === "rock") {
      return this.computerWins()
    } else if (this.human.currentWeapon === "scissors" && this.computer.currentWeapon === "paper") {
      return this.humanWins()
    }
  }

  switchTurn() {

  }

  resetGame() {

  }
}

// A game.js file that contains a Game class.
// A Game should include:
// A way to keep track of the selected game type
// Two Player instances
// A way to keep track of the data for the game board
// A way to detect when a game is a draw (no one has won)
// A way to reset the Game’s board to begin a new game
// A way to check the Game’s board data for win conditions

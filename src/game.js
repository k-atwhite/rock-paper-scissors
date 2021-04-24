class Game {
  constructor(gameType, players, stats) {
    this.gameType = gameType
    this.human =  new Player('Human', '🤠', [])
    this.computer = new Player('Computer', '🖥', [])
    this.stats = stats
  }

  evaluateGame() {
    if (this.human.currentWeapon === this.computer.currentWeapon) {
      infoText.innerText = "It's a Draw!"
    }if (this.human.currentWeapon === "rock") {
      if (this.computer.currentWeapon === "paper") {
        computerWins()
      } else if (this.computer.currentWeapon === "scissors") {
        humanWins()
      }
    else if (this.human.currentWeapon === "paper") {
      if (this.computer.currentWeapon === "scissors") {
        humanWins()
        }
      }
    }
  }

  // computerWins() {
  //   infoText.innerText = "Computer Wins!"
  // }
  //
  // humanWins() {
  //   infoText.innerText = "Human Wins!"
  // }

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
// A way to keep track of which player’s turn it currently is
// A way to detect when a game is a draw (no one has won)
// A way to reset the Game’s board to begin a new game

// A way to check the Game’s board data for win conditions
// What does that mean??

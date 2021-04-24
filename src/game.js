class Game {
  constructor(gameType, players, stats) {
    this.gameType = gameType
    this.player =  new Player('Human', '🤠', [])
    this.computer = new Player('Computer', '🖥', [])
    this.stats = stats
  }

  declareResult() {

  }
  switchTurn() {

  }

  declareDraw() {

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

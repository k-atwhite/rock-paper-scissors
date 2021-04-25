class Game {
  constructor(gameType, stats) {
    this.gameType = gameType
    this.human =  new Player({name:'Human', token: '🤠'})
    this.computer = new Player({name: 'Computer', token: '🖥'})
    this.stats = {human: 0, computer: 0}
    this.weapons = []
  }

  setGameType(gameType) {
    this.gameType = gameType
    if (this.gameType === 'classic') {
      this.weapons = ['rock', 'paper' , 'scissors' ]
    } else {
      this.weapons = ['fire', 'water', 'air', 'earth']
    }
  }

  computerWins() {
    return "Computer Wins!"
  }

  humanWins() {
    return "Human Wins!"
  }

  evaluateGame() {
    var result
    if (this.human.currentWeapon === this.computer.currentWeapon) {
      result = "It's a Draw!"
    } else if (this.human.currentWeapon === "rock" && this.computer.currentWeapon === "paper") {
      result = this.computerWins()
    } else if (this.human.currentWeapon === "rock" && this.computer.currentWeapon === "scissors") {
      result = this.humanWins()
    } else if (this.human.currentWeapon === "paper" && this.computer.currentWeapon === "scissors") {
      result = this.computerWins()
    } else if (this.human.currentWeapon === "paper" && this.computer.currentWeapon === "rock") {
      result = this.humanWins()
    } else if (this.human.currentWeapon === "scissors" && this.computer.currentWeapon === "rock") {
      result = this.computerWins()
    } else if (this.human.currentWeapon === "scissors" && this.computer.currentWeapon === "paper") {
      result = this.humanWins()
    }
    if (result === "Human Wins!") {
      this.human.wins ++
    } else if (result === "Computer Wins!") {
      this.computer.wins ++
    }
    return result
  }

  switchTurn() {
    setTimeout(function() {toggleHidden(results, classicGame)}, 3000)
  }
}

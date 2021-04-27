class Game {
  constructor(gameType, stats) {
    this.gameType = gameType
    this.human =  new Player({name:'Human', token: '🤠'})
    this.computer = new Player({name: 'Computer', token: '🖥'})
    this.weapons = []
  }

  setGameType(gameType) {
    this.gameType = gameType
    if (this.gameType === 'classic') {
      this.weapons = ['rock', 'paper' , 'scissors' ]
    } else if (this.gameType ==='elemental') {
      this.weapons = ['fire', 'water', 'air', 'earth']
    }
  }

  computerWins() {
    this.computer.wins ++
    return "🖥 Computer Wins! 🖥"
  }

  humanWins() {
    this.human.wins ++
    return "🤠 Human Wins!🤠"
  }

  evaluateGame() {
    var result
    if (this.human.currentWeapon === this.computer.currentWeapon) {
      result = "It's a Draw!"
    } else if (this.human.currentWeapon === "rock" && this.computer.currentWeapon === "scissors") {
      result = this.humanWins()
    } else if (this.human.currentWeapon === "paper" && this.computer.currentWeapon === "rock") {
      result = this.humanWins()
    } else if (this.human.currentWeapon === "scissors" && this.computer.currentWeapon === "paper") {
      result = this.humanWins()
    }else if (this.human.currentWeapon === "water" && this.computer.currentWeapon === "fire") {
      result = this.humanWins()
    }else if (this.human.currentWeapon === "ether" && this.computer.currentWeapon === "fire") {
      result = this.humanWins()
    }else if (this.human.currentWeapon === "air" && this.computer.currentWeapon === "water") {
      result = this.humanWins()
    }else if (this.human.currentWeapon === "earth" && this.computer.currentWeapon === "water") {
      result = this.humanWins()
    }else if (this.human.currentWeapon === "fire" && this.computer.currentWeapon === "air") {
      result = this.humanWins()
    }else if (this.human.currentWeapon === "ether" && this.computer.currentWeapon === "air") {
      result = this.humanWins()
    }else if (this.human.currentWeapon === "fire" && this.computer.currentWeapon === "earth") {
      result = this.humanWins()
    }else if (this.human.currentWeapon === "air" && this.computer.currentWeapon === "earth") {
      result = this.humanWins()
    }else if (this.human.currentWeapon === "water" && this.computer.currentWeapon === "ether") {
      result = this.humanWins()
    }else if (this.human.currentWeapon === "earth" && this.computer.currentWeapon === "ether") {
      result = this.humanWins()
    }else {
      result = this.computerWins()
    }
    return result
  }

  switchTurn() {
    if (currentGame.gameType === 'classic') {
      setTimeout(function() {toggleHidden(results, classicGame, changeGameButton)}, 2000)
    } else if (currentGame.gameType === 'elemental') {
      setTimeout(function() {toggleHidden(results, elementalGame, changeGameButton)}, 2000)
    }
  }
}

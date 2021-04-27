class Player {
  constructor(player) {
    this.name = player.name
    this.token = player.token
    this.wins = 0
    this.currentWeapon = player.currentWeapon
  }

  setHumanWeapon(weapon) {
    this.currentWeapon = weapon
  }

  setComputerWeapon(weaponsArray) {
    var randomWeapon = Math.floor(Math.random() * weaponsArray.length)
    this.currentWeapon = weaponsArray[randomWeapon]
  }

  saveWinsToStorage() {
    var player = this.name
    var wins = this.wins
    localStorage.setItem(player, wins)
  }

  retrieveWinsFromStorage() {
    var player = this.name
    this.wins = localStorage.getItem(player)
  }
}

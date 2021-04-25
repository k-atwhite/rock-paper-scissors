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

  }

  retrieveWinsFromStorage() {

  }

  takeTurn() {
// **** Assign random index here? Assign the weapons?
  }
}


// Never update anything in game or player from anywhere BUT game or Player

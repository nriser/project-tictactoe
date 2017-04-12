'use strict'
// remove signIn and signOut
const store = require('../store.js')

const createGameSuccess = (data) => {
  console.log('game created successfully!')
  console.log('Game object is: ', data)
  store.game = data.game
  console.log('game is stored as: ', store.game)
}

const createGameFailure = () => {
  console.log('error')
}

const updateGameSuccess = (data) => {
  console.log('updated game data: ', data)
  console.log('updated game data.game: ', data.game)
  store.game = data.game // store the game object
}

const updateGameFailure = (data) => {
  console.log('could not update game')
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure
}

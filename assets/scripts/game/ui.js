'use strict'
// remove signIn and signOut
const store = require('../store.js')

const createGameSuccess = (data) => {
  console.log('game created successfully!')
  console.log('Game object is: ', data) // Object {game: Object}, individual game
  store.game = data.game
  console.log('game is stored as: ', store.game)
}

const createGameFailure = () => {
  console.log('error')
}

const updateGameSuccess = (data) => {
  console.log('updated game data: ', data) // Object {game: Object}, individual game
  console.log('updated game data.game: ', data.game)
  store.game = data.game // store the game object
}

const updateGameFailure = () => {
  console.log('could not update game')
}

const getGamesSuccess = (data) => {
  console.log('got all games: ', data) // Object {games: Array(56)}
  // const showGames = document.createElement('p')
  // showGames.textContent = data
  // document.getElementById('show-games-container').appendChild(showGames)
  $('#show-games-container').text(JSON.stringify(data))
}

const getGamesFailure = (data) => {
  console.log('could not get games')
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure,
  getGamesSuccess,
  getGamesFailure
}

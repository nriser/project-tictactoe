'use strict'
// remove signIn and signOut
const store = require('../store.js')

const createGameSuccess = (response) => {
  console.log('game created successfully!')
  console.log('Game object is: ', response) // Object {game: Object}, individual game
  store.game = response.game
  console.log('game is stored as: ', store.game)
}

const createGameFailure = () => {
  console.log('error')
}

const updateGameSuccess = (response) => {
  console.log('updated game data: ', response) // Object {game: Object}, individual game
  console.log('updated game data.game: ', response.game)
  store.game = response.game // store the game object
}

const updateGameFailure = () => {
  console.log('could not update game')
}

const getGamesSuccess = (response) => {
  console.log('got all games: ', response) // Object {games: Array(56)}
  // const showGames = document.createElement('p')
  // showGames.textContent = data
  // document.getElementById('show-games-container').appendChild(showGames)
  $('#show-games-container').text(JSON.stringify(response))
}

const getGamesFailure = (response) => {
  console.log('could not get games')
}

const getGameSuccess = (response) => {
  $('#show-game-container').text(JSON.stringify(response))
}

const getGameFailure = (response) => {
  console.log('Please provide valid id')
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure,
  getGamesSuccess,
  getGamesFailure,
  getGameSuccess,
  getGameFailure
}

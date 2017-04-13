'use strict'
// remove signIn and signOut
const store = require('../store.js')

const createGameSuccess = (response) => {
  console.log('game created successfully!')
  console.log('Game object is: ', response) // Object {game: Object}, individual game
  $('.status-message').text('Game time!')
  $('#board').css('visibility', 'visible')
  store.game = response.game
  console.log('game is stored as: ', store.game)
  // $('#get-games').css('visibility', 'visible')
  // $('#get-game').css('visibility', 'visible')
}

const createGameFailure = () => {
  console.log('error')
  $('.status-message').text('Please sign in first.')
}

const updateGameSuccess = (response) => {
  console.log('updated game data: ', response) // Object {game: Object}, individual game
  console.log('updated game data.game: ', response.game)
  store.game = response.game // store the game object
  // $('.status-message').text('Game time!')
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
  console.log('response.game is ', response.game)
  $('#show-game-container').text('game id: ', response.game)
  // $('#show-game-container').text(JSON.stringify(response))
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

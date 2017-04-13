'use strict'
// remove signIn and signOut
const store = require('../store.js')

const createGameSuccess = (response) => {
  store.game = response.game
  console.log('game created successfully!')
  console.log('Game object is: ', response) // Object {game: Object}, individual game
  $('.status-message').text('You are playing TicTacToe with Game ID: ' + store.game.id)
  console.log('game is stored as: ', store.game)
  $('#board').css('visibility', 'visible')
}

const createGameFailure = () => {
  console.log('error')
  $('.status-message').text('Please sign in first.')
}

const updateGameSuccess = (response) => {
  store.game = response.game // store the game object
  console.log('updated game data: ', response) // Object {game: Object}, individual game
  // console.log('updated game data.game: ', response.game)
  // $('.status-message').text('Game time!')
}

const updateGameFailure = () => {
  console.log('could not update game')
}

const gameArray = (response) => {
  // console.log(response.games)
  const allGames = []
  for (let i = 0; i < response.games.length; i++) {
    allGames.push('You have played ' + response.games.length + ' games. ' + 'Game with ID = ' + response.games[i].id + ' resulted in ' + response.games[i].cells)
  }
  return allGames
}

const getGamesSuccess = (response) => {
  $('#show-games-container').show()
  console.log('got all games: ', response) // Object {games: Array(56)}
  if (response.games.length === 0) {
    $('#show-games-container').text('You have not played any game. Create a new game first.')
  } else {
    $('#show-games-container').text(gameArray(response))
  }
  // const showGames = document.createElement('p')
  // showGames.textContent = data
  // document.getElementById('show-games-container').appendChild(showGames)
  // $('#show-games-container').text('Game with ID ' + response.games[0].id + 'resulted in: ' + response.games[0].cells)
}

const getGamesFailure = () => {
  $('#show-game-container').text('Something went wrong')
}

const getGameSuccess = (response) => {
  $('#show-game-container').show()
  $('#show-game-container').text('Game with ID = ' + response.game.id + ' resulted in ' + response.game.cells)
}

const getGameFailure = () => {
  $('#show-game-container').text('Please provide a valid ID')
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

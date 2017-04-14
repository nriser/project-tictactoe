'use strict'
// remove signIn and signOut
const store = require('../store.js')

const createGameSuccess = (response) => {
  store.game = response.game
  $('#show-game-container').hide()
  $('#show-games-container').hide()
  // $('#show-game-container').css('visibility', 'hidden')
  // $('#show-games-container').css('visibility', 'hidden')
  console.log('game created successfully!')
  console.log('Game object is: ', response) // Object {game: Object}, individual game
  $('.status-message').text('You are playing TicTacToe with Game ID: ' + store.game.id)
  console.log('game is stored as: ', store.game)
  $('#board').fadeIn()
  // $('#board').css('visibility', 'visible')
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

const returnResults = (response) => {
  // console.log(response.games)
  const allGames = []
  allGames.push('\nYou have played games with the following IDs')
  for (let i = 0; i < response.games.length; i++) {
    allGames.push(' ' + response.games[i].id)
  }
  return allGames
}

const getGamesSuccess = (response) => {
  $('#show-games-container').fadeIn()
  // $('#show-games-container').css('visibility', 'visible')
  console.log('got all games: ', response.games) // Object {games: Array(56)}
  let totalWins = 0
  for (let j = 0; j < response.games.length; j++) {
    for (let i = 0; i < 3; i++) {
      if (
        // X win combinations
        // 0, 1, 2 -> 3, 4, 5 -> 6, 7, 8
        response.games[j].cells[i * 3] === '\u2613' && response.games[j].cells[(i * 3) + 1] === '\u2613' && response.games[j].cells[(i * 3) + 2] === '\u2613' ||
        // 0, 3, 6 -> 1, 4, 7 -> 2, 5, 8
        response.games[j].cells[i] === '\u2613' && response.games[j].cells[i + 3] === '\u2613' && response.games[j].cells[i + 6] === '\u2613' ||
        // 0, 4, 8 -> 1, 4, 7 (redundant) --> 2, 4, 6
        response.games[j].cells[i] === '\u2613' && response.games[j].cells[4] === '\u2613' && response.games[j].cells[8 - i] === '\u2613') {
        totalWins++
      }
    }
  }
  // $('#show-games-container').text('You have won ' + totalWins + ' games.')
  if (response.games.length === 0) {
    $('#show-games-container').text('You have not played any game. Create a new game first.')
  } else {
    $('#show-games-container').text('You have played ' + response.games.length + ' games and won ' + totalWins + ' games.' + returnResults(response))
  }
  // const showGames = document.createElement('p')
  // showGames.textContent = response
  // document.getElementById('show-games-container').appendChild(showGames)
  // $('#show-games-container').text('Game with ID ' + response.games[0].id + 'resulted in: ' + response.games[0].cells)
}

const getGamesFailure = () => {
  $('#show-games-container').fadeIn()
  // $('#show-games-container').css('visibility', 'visible')
  $('#show-games-container').text('You have not played any games yet.')
}

const getGameSuccess = (response) => {
  $('#show-game-container').fadeIn()
  // $('#show-game-container').css('visibility', 'visible')
  const currentBoard = response.game.cells
  for (let i = 0; i < currentBoard.length; i++) {
    if (currentBoard[i] === '') {
      currentBoard[i] = ' '
    }
  }
  $('#show-game-container').text('Game with ID = ' + response.game.id + ' resulted in\n[' + currentBoard.slice(0, 3) + ']\n[' + currentBoard.slice(3, 6) + ']\n[' + currentBoard.slice(6, 9) + ']')
}

const getGameFailure = () => {
  $('#show-game-container').fadeIn()
  // $('#show-game-container').css('visibility', 'visible')
  $('#show-game-container').text('Please provide a valid ID for a previously played game.')
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

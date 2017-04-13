'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')
// const board = require('../board')

const onCreateGame = function () {
  console.log('on create game ran!!!!!')
  event.preventDefault()
  // $('#board').show()
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const onGetGames = function () {
  console.log('on get games ran!!!!!')
  event.preventDefault()
  // $('#board').show()
  api.getGames()
    .then(ui.getGamesSuccess)
    .catch(ui.getGamesFailure)
}

const onGetGame = function (event) {
  console.log('on get game ran!!!!!')
  const data = getFormFields(this) // this will refer to event.target because it gets passed into addHandlers as a callback.
  event.preventDefault()
  // $('#board').show()
  api.getGame(data)
    .then(ui.getGameSuccess)
    .catch(ui.getGameFailure)
}

// const onUpdateGame = function () {
//   console.log('on update game ran!!!!!')
//   event.preventDefault()
//   // $('#board').show()
//   api.updateGame()
//     .then(ui.updateGameSuccess)
//     .catch(ui.updateGameFailure)
// }

const addGameHandlers = () => {
  $('#create-game').on('submit', onCreateGame) // when browser hears on submit event on
  $('#get-games').on('submit', onGetGames)
  $('#get-game').on('submit', onGetGame)
}

module.exports = {
  addGameHandlers
}

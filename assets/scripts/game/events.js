'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onCreateGame = function () {
  event.preventDefault()
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const onGetGames = function () {
  event.preventDefault()
  api.getGames()
    .then(ui.getGamesSuccess)
    .catch(ui.getGamesFailure)
}

const onGetGame = function (event) {
  const data = getFormFields(this) // this will refer to event.target because it gets passed into addHandlers as a callback.
  event.preventDefault()
  api.getGame(data)
    .then(ui.getGameSuccess)
    .catch(ui.getGameFailure)
}

const addGameHandlers = () => {
  $('#create-game').on('submit', onCreateGame) // when browser hears on submit event on
  $('#get-games').on('submit', onGetGames)
  $('#get-game').on('submit', onGetGame)
}

module.exports = {
  addGameHandlers
}

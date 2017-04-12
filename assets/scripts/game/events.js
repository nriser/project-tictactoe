'use strict'

// const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')
// const board = require('../board')

const onCreateGame = function () {
  console.log('on create game in ran!!!!!')
  event.preventDefault()
  // $('#board').show()
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const addGameHandlers = () => {
  $('#create-game').on('submit', onCreateGame) // when browser hears on submit event on
}

module.exports = {
  addGameHandlers
}

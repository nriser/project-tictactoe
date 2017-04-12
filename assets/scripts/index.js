'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

require('./example')

const authEvents = require('./auth/events.js')
const board = require('./board.js')
const gameEvents = require('./game/events.js')

// use require without a reference to ensure a file is bundled

$(() => {
  authEvents.addHandlers()
  board.addBoardHandlers()
  gameEvents.addGameHandlers()
})

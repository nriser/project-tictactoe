'use strict'

const config = require('../config.js')
const store = require('../store.js')

const createGame = function () {
  console.log('create game request')
  return $.ajax({
    method: 'POST',
    url: config.apiOrigin + '/games/',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

module.exports = {
  createGame
}

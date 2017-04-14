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

const updateGame = function (index, value, over) {
  // console.log('keep track of the game')
  console.log('api.js updateGame function game and user objects', store) // game and user objects
  // console.log('game', store.game) // game object
  // console.log('game id', store.game.id) // game id
  return $.ajax({
    method: 'PATCH',
    url: config.apiOrigin + '/games/' + store.game.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': index,
          'value': value
        },
        'over': over
      }
    }
  })
}

const getGames = function () {
  // console.log('keep track of the game')
  console.log('api.js getGames function game and user objects', store) // game and user objects
  // console.log('game', store.game) // game object
  // console.log('game id', store.game.id) // game id
  return $.ajax({
    method: 'GET',
    url: config.apiOrigin + '/games/',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getGame = function (data) {
  // console.log('keep track of the game')
  // console.log('api.js getGame function store', store) // game and user objects
  // console.log('api.js getGame function store.game', store.game)
  // console.log('game', store.game) // game object
  // console.log('game id', store.game.id) // game id
  return $.ajax({
    method: 'GET',
    url: config.apiOrigin + '/games/' + data.game.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createGame,
  updateGame,
  getGames,
  getGame
}

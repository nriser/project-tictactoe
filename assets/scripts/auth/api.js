'use strict'

const config = require('../config.js')
const store = require('../store.js')

const signUp = (data) => {
  console.log('data is', data) // to check to see what data gives us, structure
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST', // has to be a string
    data // this line is same as data: data. Need a new key on this object, just calling it data
  })
} // an object we'll pass into as an ajax request

const signIn = (data) => { // data object passed into  argument will be different from argument in above function
  // console.log('inside signIn. data is', data) to check
  console.log('data is', data) // to check to see what data gives us, structure
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST', // has to be a string
    data
  })
}

const changePassword = (data) => {
  console.log('inside ChangePassword, data is :', data)
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id,
    method: 'PATCH', // has to be a string
    headers: { // headers always plural by default // look at curl for this
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const signOut = (data) => {
  console.log('inside signOut, data is :')
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE', // has to be a string
    headers: { // headers always plural by default // look at curl for this
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createGame = function () {
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
  signUp,
  signIn,
  changePassword,
  signOut,
  createGame
}
// doesn't have to be arrows

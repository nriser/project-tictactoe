'use strict'

const store = require('../store.js')
const board = require('../board.js')

// $('.status-message').show()

const signUpSuccess = (response) => { // argument can be (response) or something too. Just an argument name
  console.log(response)
  $('#sign-up').css('visibility', 'hidden')
  $('#sign-in').css('visibility', 'visible')
  $('.status-message').text('You have successfully signed up! Please sign in.')
}

const signUpFailure = (error) => {
  console.error(error)
  $('.status-message').text('Email already exists. Please sign in.')
}

const signInSuccess = (response) => { // argument can be (response) or something too. Just an argument name
  console.log(response)
  // because i know that i'll need that token again later, i'll store it somewhere
  $('#change-password').css('visibility', 'visible')
  $('#create-game').css('visibility', 'visible')
  $('#sign-out').css('visibility', 'visible')
  $('#sign-in').css('visibility', 'hidden')
  $('#sign-up').css('visibility', 'hidden')
  $('#get-game').css('visibility', 'visible')
  $('#get-games').css('visibility', 'visible')

  store.user = response.user // response.user is the email id and token // stores whatever that was in that response
  $('.status-message').text('You have successfully signed in! Create a new game to play!')
}

const signInFailure = (error) => {
  console.error(error)
  $('.status-message').text('Please sign up first.')
}

const changePasswordSuccess = (response) => {
  console.log('response is ', response)
  $('.status-message').text('You have succesfully changed your password!')
}

const changePasswordFailure = (error) => {
  console.error(error)
  $('.status-message').text('Something went wrong. Are you signed in?')
}

const signOutSuccess = () => {
  console.log('signOut success ran. and nothing was returned')
  $('.status-message').text('You have successfully signend out!')
  $('#change-password').css('visibility', 'hidden')
  $('#create-game').css('visibility', 'hidden')
  $('#sign-out').css('visibility', 'hidden')
  $('#sign-in').css('visibility', 'visible')
  $('#sign-up').css('visibility', 'visible')
  $('#get-games').css('visibility', 'hidden')
  $('#get-game').css('visibility', 'hidden')
  store.user = null // only have one person signed in in a givne session, one browser
}

const signOutFailure = (error) => {
  console.log('error on sign out is: ', error)
  $('.status-message').text('Something went wrong. Please try again.')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}

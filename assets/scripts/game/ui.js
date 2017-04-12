'use strict'
// remove signIn and signOut
const store = require('../store.js')

const createGameSuccess = (response) => {
  console.log('game created successfully!')
  console.log('Game object is: ', response)
  store.game = response.game
  console.log('game is stored as: ', store.game)
}

const createGameFailure = () => {
  console.log('error')
}

module.exports = {
  createGameSuccess,
  createGameFailure
}


// 'use strict'
//
// const store = require('../store.js')
//
// const signUpSuccess = (response) => { // argument can be (response) or something too. Just an argument name
//   console.log(response)
// }
//
// const signUpFailure = (error) => {
//   console.error(error)
// }
//
// const signInSuccess = (response) => { // argument can be (response) or something too. Just an argument name
//   console.log(response)
//   // because i know that i'll need that token again later, i'll store it somewhere
//   store.user = response.user // response.user is the email id and token // stores whatever that was in that response
// }
//
// const signInFailure = (error) => {
//   console.error(error)
// }
//
// const changePasswordSuccess = (response) => {
//   console.log('response is ', response)
// }
//
// const changePasswordFailure = (error) =>
//   console.error(error)
//
// const signOutSuccess = () => {
//   console.log('signOut success ran. and nothing was returned')
//   store.user = null // only have one person signed in in a givne session, one browser
// }
//
// const signOutFailure = (error) => {
//   console.log('error on sign out is: ', error)
// }
//
// module.exports = {
//   signUpSuccess,
//   signUpFailure,
//   signInSuccess,
//   signInFailure,
//   signOutSuccess,
//   signOutFailure,
//   changePasswordSuccess,
//   changePasswordFailure
// }

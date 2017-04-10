'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  const data = getFormFields(this) // this will refer to event.target because it gets passed into addHandlers as a callback.
  event.preventDefault()
  api.signUp(data) // check the api.js file to see. When successful, show signUpSucess message, otherwise, signUpFailure message
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) { // stop here , add console to check if code is working so far
  //console.log("on sign in ran!!!!!")
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('inside onChangePassword')
  const data = getFormFields(event.target)
  // console.log('inside onChangePassword') make sure it works first by having this console.log
  api.changePassword(data) // do i need an argument in here? I want data into because i know that in my curl script i have data. // in order to tget that data, add const data abouve. Doesn't have to be the same argument name 'data' as data in const changePassword = (data) api.js
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp) // when browser hears on submit event on #sign-up element, it'll run pass in onSignup into it as a calllback and runs it
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
}

module.exports = {
  addHandlers
}

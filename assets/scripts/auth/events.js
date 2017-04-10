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

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp) // when browser hears on submit event on #sign-up element, it'll run pass in onSignup into it as a calllback and runs it
}

module.exports = {
  addHandlers
}

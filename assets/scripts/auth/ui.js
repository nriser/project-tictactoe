'use strict'

const store = require('../store.js')

const signUpSuccess = (response) => { // argument can be (response) or something too. Just an argument name
  console.log(response)
}

const signUpFailure = (error) => {
  console.error(error)
}

const signInSuccess = (response) => { // argument can be (response) or something too. Just an argument name
  console.log(response)
  // because i know that i'll need that token again later, i'll store it somewhere
  store.user = response.user // response.user is the email id and token // stores whatever that was in that response
}

const signInFailure = (error) => {
  console.error(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}

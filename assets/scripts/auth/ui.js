'use strict'

const store = require('../store.js')

const signUpSuccess = (response) => { // argument can be (response) or something too. Just an argument name
  console.log(response)
}

const signUpFailure = (error) => {
  console.error(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure
}

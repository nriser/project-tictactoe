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

module.exports = {
  signUp
}
// doesn't have to be arrows

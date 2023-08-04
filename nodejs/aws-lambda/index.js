require('dotenv').config()
// console.log(process.env) // remove this after you've confirmed it is working

exports.handler = function(event, context, callback) {
  console.log(`Hello ${process.env.HELLO}.`)

  callback(null, event)
}

const express = require('express')
const dotenv = require('dotenv')

dotenv.config()

const app = express()

app.get('/', function(req, res) {
  res.status(200).send(`Hello ${process.env.HELLO}`)
})

module.exports = app

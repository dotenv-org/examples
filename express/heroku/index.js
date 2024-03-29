require('dotenv').config()
console.log(process.env) // remove this after you've confirmed it is working

const PORT = process.env.PORT || 3000
const express = require('express')
const app = express()

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}.`)
})

app.get('/', function (req, res) {
  res.send(`Hello ${process.env.HELLO}`)
})


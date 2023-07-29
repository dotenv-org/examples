import dotenv from 'dotenv'
dotenv.config()

import express  from 'express'
const app = express()

app.get('/', function (req, res) {
  res.send(`Hello ${process.env.NAME}`)
})

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`)
})

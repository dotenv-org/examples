// index.js
require('dotenv').config()
console.log(process.env) // remove this after you've confirmed it is working

const PORT = process.env.PORT || 3000

const http = require('http')
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain')
  res.end(`Hello ${process.env.HELLO}`)
})

server.listen(PORT, () => {
  console.log(`Server running on port:${PORT}/`)
})

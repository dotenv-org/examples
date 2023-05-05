const result = require('dotenv').config()
const env = result.parsed
console.log(env)
console.log(env["HELLO"])

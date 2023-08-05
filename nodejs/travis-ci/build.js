// build.js
require('dotenv').config()
console.log(process.env) // remove this after you've confirmed it is working

console.log(`Hello ${process.env.HELLO}`)


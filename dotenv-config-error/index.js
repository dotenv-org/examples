require('dotenv').config({ debug: false })

console.log("hello", process.env.NAME)

require('dotenv').config({ debug: true })

console.log("hello", process.env.NAME)

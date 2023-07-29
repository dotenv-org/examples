require('dotenv').config({ debug: true, override: false })
console.log("hello", process.env.NAME)

require('dotenv').config({ debug: true, override: true })
console.log("hello", process.env.NAME)

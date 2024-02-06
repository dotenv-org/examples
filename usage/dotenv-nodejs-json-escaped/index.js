const result = require('dotenv').config()

console.log(JSON.parse(process.env.CONFIG_JSON))

const jsonString = '{"fielda":"testvalue=","fieldb":false,"fieldc":null,"fieldd":{"nested":"true"}}'
console.log(JSON.parse(jsonString))

console.log(JSON.stringify({ "hi": "there" }))

require('dotenv').config()

console.log(process.env)

console.log(process.env['MULTI_SINGLE_AND_DOUBLE_QUOTED'])

const parsed = JSON.parse(process.env['MULTI_SINGLE_AND_DOUBLE_QUOTED'])
console.log(parsed)

//const str = "{\"foo\": \"bar\"}"
//const parsed = JSON.parse(str)
//console.log(parsed)

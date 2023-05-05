const dir = process.cwd()
const url = new URL(`file://${dir}/.env`)
require('dotenv').config({ path: url })

console.log(process.env.HELLO)

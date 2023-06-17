import dotenv from "dotenv"

const processEnv: { [key: string]: any } = {}

const result = require('dotenv').config({ processEnv, DOTENV_KEY: 'dotenv://:key_cd9fe909e1adf109873d5117c3f4beda33a9a8006f4eaeb73a2a0d21bab0cbd4@dotenv.local/vault/.env.vault?environment=development' })

console.log(result.parsed) // { HELLO: 'Universe' }
console.log(result.parsed.HELLO) // 'Universe'
console.log(process.env.HELLO) // undefined (as intentioned)

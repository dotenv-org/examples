import dotenv from "dotenv"

const processEnv: { [key: string]: any } = {}

dotenv.config({ processEnv })

console.log('processEnv', processEnv.HELLO) // Universe
console.log('process.env', process.env.HELLO) // undefined (as intentioned)

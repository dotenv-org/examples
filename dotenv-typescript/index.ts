import { config } from "dotenv"

config()

console.log(`hi ${process.env.NAME}`)

import dotenv from 'dotenv'

const result1 = dotenv.parse('BASIC=basic')
console.log(result1)

const result2 = dotenv.parse(Buffer.from('BASIC=basic'))
console.log(result2)

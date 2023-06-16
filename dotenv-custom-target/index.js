const customTarget = {}

require('dotenv').config({ processEnv: customTarget })

console.log('customTarget', customTarget.HELLO)
console.log('process.env', process.env.HELLO)

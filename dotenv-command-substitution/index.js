var dotenv = require('dotenv')
var dotenvEval = require('dotenv-eval')

var myEnv = dotenv.config()
dotenvEval.eval(myEnv)

console.log(process.env)

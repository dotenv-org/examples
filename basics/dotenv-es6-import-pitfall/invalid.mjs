import dotenv from 'dotenv'
dotenv.config() // this will NOT load process.env before errorReporter is loaded.
// ES6 modules are not intuitive  like that. see valid.mjs for proper configuration

import errorReporter from './errorReporter.mjs'

errorReporter.report(new Error('documented example'))

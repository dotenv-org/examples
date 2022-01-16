import 'dotenv/config'
import errorReporter from './errorReporter.mjs'

errorReporter.report(new Error('documented example'))

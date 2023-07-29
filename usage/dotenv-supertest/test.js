const request = require('supertest')
const assert = require('assert')

const app = require('./app.js')

request(app)
  .get('/')
  .expect(200, 'Hello Test')
  .end(function(err, res) {
    if (err) throw err;

    console.log('Tests passing 🟢.')
  })


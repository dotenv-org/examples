require('dotenv').config() // this is a smell but is present in many front-end code. it is here to demonstrate that it won't fail your process. BUT you should be putting dotenv in cypress.config.js

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe('My First Test', () => {
  it('Does not do much!', () => {
    const hello = Cypress.env('HELLO')

    expect(hello).to.equal('World')
  })
})

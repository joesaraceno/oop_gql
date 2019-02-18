const parser = require('body-parser')
const express = require('express')
const _ = require('lodash')

const app = express()

app.use(parser.json())

app.use(parser.urlencoded({ extended: true }))


app.get('/status', (req, res) => {
  res.send({
    status: 'ok'
  })
})

app.get('/greet', (req, res) => {
  const { food, name } = req.query
  res.send({
    message: `Hello ${name} would you like some ${food}`
  })
})

app.post('/register' , (req, res) => {
  const { body } = req
  if (!body.username) {
    return res.status(400).send({
      message: 'missing required parameter: username'
    })
  }

  if (!body.password) {
    return res.status(400).send({
      message: 'missing required parameter: password'
    })
  }

  return res.send({
    message: `new user created`
  })
})

module.exports = app
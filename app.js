const parser = require('body-parser')
const express = require('express')
const _ = require('lodash')
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')

const gqlPort = 4001;

const app = express()

app.use(parser.json())

app.use(parser.urlencoded({ extended: true }))

// graphql initialization of root schema
const schema = buildSchema(`
  "The root of it all"
  type Query {
    "Returns a greeting"
    hello: String
  }
`)

const root = {
  hello: () => {
    return 'Hello World!';
  }
}

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true
}));


app.listen(gqlPort)

console.log(`Gql API Server Running on ${gqlPort}`);

// restful routes
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
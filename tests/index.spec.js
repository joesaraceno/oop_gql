import test from 'ava'
const request = require('supertest')
const app = require('./../app')

// TODO: make these graphql queries instead of restful route checks?
test('/status', async t => { 
  const response = await request(app)
  .get('/status')
  t.is(response.status, 200)
  t.deepEqual(response.body, {
    status: 'ok'
  })
})

test('/greet', async t => {
  const name = 'Nate'
  const food = 'Pizza'
  const response = await request(app)
  .get('/greet')
  .query({ name, food })

  t.is(response.status, 200)
  t.is(response.body.message, `Hello ${name} would you like some ${food}`)
})

test('/signup should fail when no username is supplied', async t => {
  const password = 'some-pwd'
  const response = await request(app)
  .post('/register')
  .send({ password })

  t.is(response.status, 400)
  t.is(response.body.message, `missing required parameter: username` )
})

test('/signup should fail when no password is supplied', async t => {
  const username = 'some-user'
  const response = await request(app)
  .post('/register')
  .send({ username })

  t.is(response.status, 400)
  t.is(response.body.message, `missing required parameter: password` )
})
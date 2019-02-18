const app = require('./app')
const http = require ('http')
const server = http.createServer(app)


const PORT = process.env.NODE_ENV || 5050

server.listen(PORT, () => {
  console.log(`base http server is listening on port ${PORT}`)
})

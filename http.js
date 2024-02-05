const http = require('node:http')
const { findAvailablePort } = require('./free-port')

const desirePort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hola mundo')
})

findAvailablePort(desirePort).then(port => {
  server.listen(port, () => {
    console.log(`server listening on server http://localhost:${port}`)
  })
})

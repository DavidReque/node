const http = require('node:http')

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hola mundo')
})

server.listen(0, () => {
  console.log(`server listening on server http:localhost:${server.address().port}`)
})

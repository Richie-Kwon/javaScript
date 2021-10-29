const http = require('http')

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.end('Let it go')
})

const PORT = 4000
server.listen(PORT, () => {
  console.log(`the server is listening at port: ${PORT}.`)
})

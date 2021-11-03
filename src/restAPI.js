// @ts-check

// creating web server

const http = require('http')

/** post
 * post
GET/ posts
GET/posts/:id
POST/posts
*/

const server = http.createServer((req, res) => {
  if (req.url === '/posts' && req.method === 'GET') {
  } else if (req.url === 'posts/:id') {
  } else if (req.url === 'posts' && req.method === 'POST') {
  } else {
    res.statusCode = 404
    res.end('Not found')
  }

  res.statusCode = 200
  res.end('Hello!')
})

const PORT = 4000

server.listen(PORT, () => {
  console.log(`The server is liestening at port: ${PORT}`)
})

// nodemon restAPI.js

// @ts-check

// creating web server

const http = require('http')

// no database

 /**
 * @typedef Post
 * @property {string} id
 * @property {string} title
 * @property {string} content
 */   
    
 /** @type {Post} */
 const examplePost = {
   id :38888,
   title:'abc',
   content: 'xyz',
 }

 console.log(examplePost)


/** post
 * post
GET/ posts
GET/posts/:id
POST/posts
*/

const server = http.createServer((req, res) => {
  if (req.url === '/posts' && req.method === 'GET') {
    res.statusCode = 200
    res.end('OK')
  } else if (req.url === 'posts/:id') {
    res.statusCode = 200
    res.end('OK')
  } else if (req.url === 'posts' && req.method === 'POST') {
    res.statusCode = 200
    res.end('OK')
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

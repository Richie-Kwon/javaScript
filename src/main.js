// formatting >> prettier
// console.log('hello world')

// // Linting: ESLint
// console.log('hello world')

// eslint-disable-next-line no-console
// console.log('hello world')

// // @ts-check 는 맨 위에
// const someString = 'hi'

// const yera = 8

// // @ts-ignore
// const result = Math.log(yera)
// console.log(result)
// console.log(someString)

// @ts-check
const express = require('express')
const fs = require('fs')

const app = express()

const PORT = 5000

app.use(
  '/',
  async (req, res, next) => {
    const requestedAt = new Date()
    // @ts-ignore
    req.requestedAt = requestedAt
    const fileContent = await fs.promises.readFile('test')
    // @ts-ignore
    req.fileContent = fileContent

    console.log('Middleware1')
    setTimeout(() => {
      next()
    }, 1000)
  },
  (req, res, next) => {
    console.log('Middleware1-2')
    next()
  }
)
app.use((req, res) => {
  console.log('Middleware2')
  // @ts-ignore
  res.send(`Hello express!: ${req.requestedAt} ${req.fileContent}`)
})

app.listen(PORT, () => {
  console.log(`The express servier is liestening at port: ${PORT}`)
})

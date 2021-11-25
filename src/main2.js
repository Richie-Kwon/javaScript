// @ts-check
const express = require('express')

const app = express()

const userRouter = express.Router()

const bodyPaser = require('body-parser')
app.use(bodyPaser.json())

const USERS = {
  7: {
    nickname: 'foo',
  },
}

// @ts-ignore
userRouter.param('id', (req, res, next, value) => {
  console.log(value)
  // @ts-ignore
  req.user = USERS[value]
  next()
})

const PORT = 5000

// app.get('/', (req, res) => {
//   res.send('Root - GET')
// })

// @ts-ignore
userRouter.get('/', (req, res) => {
  res.send('User list')
})

userRouter.get('/:id', (req, res) => {
  // @ts-ignore
  console.log('merong:', req.user)
  // @ts-ignore
  res.send(req.user)
})

// @ts-ignore
userRouter.post('/', (req, res) => {
  res.send('Root - POST')
})

userRouter.post('/:id/nickname', (req, res) => {
  //req.body : {"nickname": "bar"}
  const { user } = req
  const { nickname } = req.body

  user.nickname = nickname
  res.send(`User nickname updated: ${user.nickname}`)
})

app.use('/users', userRouter)

app.listen(PORT, () => {
  console.log(`The exrepss server is liestening at port: ${PORT}`)
})

// @ts-check

const { couldStartTrivia } = require('typescript')

// new Promise((resolve, reject) => {
//   console.log('inside promise')
//   resolve('First resolve')
// }).then((value) => {
//   console.log('value', value)
// })

// Producer
// new promise is created, the excecutor automatically runs
const promise = new Promise((resolve, reject) => {
  console.log('doing something')
  setTimeout(() => {
    resolve('suceeed')
    reject(new Error('no network'))
  }, 2000)
})

// Consumer : then/ catch/ finally
promise
  .then(
    (value) => console.log(value) //value is 'suceed'
  )
  .catch((error) => {
    console.log(error)
  })
  .finally(() => console.log('finally'))

// async & await

async function fetchUser() {
  return 'username'
}

const user1 = fetchUser()
user1.then(console.log)

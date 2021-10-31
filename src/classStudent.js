// prototype

function Student(name) {
  this.name = name
}

const me = new Student('yera')

console.log(me instanceof Student)

// spread operator object or array or function
const personalData = {
  nickname: '0 duck',
  email: '0duck@gmail.com',
}

const publicData = {
  age: 20,
}

const user = {
  ...personalData,
  ...publicData,
}

console.log(user)

const { nickname, ...personalData2 } = user

console.log(personalData)

function foo(head, ...rest) {
  console.log(head)
  console.log(...rest)
}
foo(1, 2, 3, 4, 5)

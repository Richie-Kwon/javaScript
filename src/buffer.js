// @ts-check

const fs = require('fs')

const result = fs.readFileSync('test', 'utf-8')

console.log(result)
           
const buf = Buffer.from([97,98,99,100,101])

console.log(buf)
const fs = require('fs')

const stream = fs.readFileSync('test')

// stream.pipe(process.stdout) 

console.log(stream)
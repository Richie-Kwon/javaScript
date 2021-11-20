 // @ts-check

const { preProcessFile } = require("typescript")

 
 console.log('__dirname', __dirname)
 console.log('__filename', __filename)

process.stdin.setEncoding('utf-8')

process.stdin.on('data', (data)=>{console.log(data, data.length)}) 

process.exit()

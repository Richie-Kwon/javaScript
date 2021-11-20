// @ts-check

const fs = require ('fs')

// const ws = fs.createWriteStream('bigfile')

// ws.write('Hello world')

const rs = fs.createReadStream('bigfile',{encoding:'utf-8'})

let chunkCount = 0

rs.on ('data', (data)=>{
    chunkCount +=1
    console.log('Event: data', data)
})

rs.on ('end', ()=>{
    console.log('Event: end')
    console.log('chunkCount', chunkCount)
})
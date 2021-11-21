  // @ts-check
const fs = require ('fs')
// const { json } = require('stream/consumers')

const rs = fs.createReadStream('jsons', {encoding: 'utf-8'})

let totalSum = 0

rs.on ('data', (data)=>{
    console.log('event!')
    if (typeof data!== 'string'){return}
    totalSum +=data
    .split('\n')
    .map((jsonLine) =>{
        try{return JSON.parse(jsonLine)}
        catch{return undefined}})

    .map((json)=>json.data)
    .reduce ((sum, current)=> sum + current, 0)
})

rs.on ('end', ()=>{
    console.log('finished!')
    console.log('totalSum:', totalSum)
})
    
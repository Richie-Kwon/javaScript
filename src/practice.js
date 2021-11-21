  // @ts-check
const fs = require ('fs')
// const { json } = require('stream/consumers')

const rs = fs.createReadStream('jsons', {encoding: 'utf-8',highWaterMark:20} )


let totalSum = 0

let accumulatedJsonstr = ''

rs.on ('data', (data)=>{
    console.log('event!:', data)
    
    if (typeof data!== 'string'){return} 

    accumulatedJsonstr += data

    const lastNewlineIdx = accumulatedJsonstr.lastIndexOf('\n')
    const jsonLinesStr = accumulatedJsonstr.substring(0, lastNewlineIdx)
    accumulatedJsonstr = accumulatedJsonstr.substring(lastNewlineIdx)

    totalSum +=jsonLinesStr
    .split('\n')
    .map((jsonLine) =>{
        try{return JSON.parse(jsonLine)}
        catch{return undefined}})
 
    .filter(json => json)
    .map((json)=>json.data)
    .reduce ((sum, current)=> sum + current, 0)
})     

rs.on ('end', ()=>{
    console.log('finished!')
    console.log('totalSum:', totalSum)
})
      
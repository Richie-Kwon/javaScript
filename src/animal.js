
const animals = ['dog', 'cat']

module.exports = animals

// callback style
fs.readFile(FILENAME, 'utf-8', (err, result)=>{
    if(err){
        console.error(err)
    } else {
        console.log(result)
    }
})


// synchronised
try {const result =fs.readFileSync('src/mkain.js','utf-8')
console.log(result)
} catch(error){console.error(error)}

// fs.readFile()

//promise-style
async function main(){

    try{
        const result = await fs.promises.readFile(FILENAME, 'utf-8')
    console.log(result)}

    catch(error){
        console.error(error)
    }

main()
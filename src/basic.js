//  const os = require ('os')

//  console.log(
//      ['arch', os.arch()],
//      ['plaform', os.platform()],
//      ['cpus', os.cpus()]
//  )


const dns = require('dns')

dns.lookup('google.co.uk', (err, address,family)=>{
    console.log(address, family)}
)

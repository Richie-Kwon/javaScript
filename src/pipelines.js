// @ts-check

const { log, error} = console

const fs = require ('fs')

const stream = require ('stream')

const zlib = require('zlib')

const util = require ('util')

async function gzip() {
    return util.promisify(stream.pipeline)(
    zlib.createGzip(),
    fs.createWriteStream('bigfile'))
}

async function gunzip() {
    return util.promisify(stream.pipeline)(
        fs.createReadStream('bigfile.gz')
        zlib.createGunzip(),
        fs.createWriteStream('bigfile.unzipped')
    )
}

async function main () {
    await gzip()
    await gunzip()
}



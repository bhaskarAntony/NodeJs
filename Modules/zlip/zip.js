const zlib = require('zlib')
const fs= require('fs')

let gZip = zlib.createGzip()
let r = fs.createReadStream('mytext.txt')
let w = fs.createWriteStream('zippedtext.gz')//gz extenction called zip file we are craeting new zip file

r.pipe(gZip).pipe(w)//pipe() method will excecutes one by one

console.log('zip file is created')
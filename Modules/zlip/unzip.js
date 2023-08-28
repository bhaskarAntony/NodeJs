const zlib = require('zlib')
const fs = require('fs')

let gZip = zlib.createUnzip()
let r = fs.createReadStream('zippedtext.gz')//reading zipped file 
let w  = fs.createWriteStream('unziped-file.txt')//careting new file for unzipped file

r.pipe(gZip).pipe(w)//creating new file and convering zip file to unzip file

console.log('Unzip file is created')
const fs = require('fs')

//sync read 
//here we are not using callback function
const data = fs.readFileSync('./myfile.txt')
console.log('sync read = ', data)// in form of ascci or buffer
console.log('ascii to string = ', data.toString())//ascii to string formate
//output: sync read =  <Buffer 77 6a 64 68 6a 61 73 6b 68 64 6a 6b 61 77 64 0d 0a 64 61 6b 73 6a 64 6c 73 61 64 0d 0a 27 73 61 6c 64 73 0d 0a 64 3b 6c 61 64 6c 0d 0a 41 27 3b 4c 71 ... 5 more bytes>
// ascii to string =  wjdhjaskhdjkawd
//updating existing file using sync method

const fs = require('fs')

//sync method
const data = '\n\n p6 output: synchronously append data to a file, creating file if it does not exist'
fs.appendFileSync('./test1.txt', data)
console.log('synchronously data append successfully completed.')
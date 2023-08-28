const fs = require('fs')

const data = "All file System operations have synchronous, callback, and pomise-based forms, and are accessible using both commonJS syntax and ES6 Module(ESM)"

//sync file write
fs.writeFileSync('./test2.txt', data)

console.log('sync file write completed.')
const fs = require('fs')
const data = "All file System operations have synchronous, callback, and pomise-based forms, and are accessible using both commonJS syntax and ES6 Module(ESM)"

//async write
fs.writeFile('./test1.txt', data, function(err){
    if(err) console.log(err)

    console.log('async file write completed.')
})
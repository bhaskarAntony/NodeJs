//updating existing file in system using async method
const fs = require('fs')
const data = '\n\n p5 output: Asynchronously append data to a file, creating file if it does not exist'

fs.appendFile('./test1.txt', data, function (err){
    if(err) console.log(err)

    console.log('append successfully completed')
})
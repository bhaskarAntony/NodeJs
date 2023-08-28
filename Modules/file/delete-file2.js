const fs = require('fs')

//synchronous method to delete file
fs.unlinkSync('./test2.txt')
    console.log('file removed successfully') //output:test2.txt file removed successfully